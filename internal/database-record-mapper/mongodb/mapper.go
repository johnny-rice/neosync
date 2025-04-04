package mongodb

import (
	"errors"
	"fmt"
	"math/big"

	"github.com/nucleuscloud/neosync/internal/database-record-mapper/builder"
	neosync_types "github.com/nucleuscloud/neosync/internal/types"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type MongoDBMapper struct{}

func NewMongoBuilder() *builder.Builder[map[string]any] {
	return &builder.Builder[map[string]any]{
		Mapper: &MongoDBMapper{},
	}
}

func (m *MongoDBMapper) MapRecord(item map[string]any) (map[string]any, error) {
	return nil, errors.ErrUnsupported
}

func (m *MongoDBMapper) MapRecordWithKeyType(
	item map[string]any,
) (valuemap map[string]any, typemap map[string]neosync_types.KeyType, err error) {
	result := make(map[string]any)
	ktm := make(map[string]neosync_types.KeyType)
	for k, v := range item {
		val, err := parsePrimitives(k, v, ktm)
		if err != nil {
			return nil, nil, fmt.Errorf("failed to parse primitive value for key %q: %w", k, err)
		}
		result[k] = val
	}
	return result, ktm, nil
}

func parsePrimitives(
	key string,
	value any,
	keyTypeMap map[string]neosync_types.KeyType,
) (any, error) {
	switch v := value.(type) {
	case primitive.Decimal128:
		keyTypeMap[key] = neosync_types.Decimal128
		floatVal, _, err := big.ParseFloat(v.String(), 10, 128, big.ToNearestEven)
		if err != nil {
			return nil, fmt.Errorf("failed to parse decimal128 value for key %q: %w", key, err)
		}
		return floatVal, nil
	case primitive.Binary:
		keyTypeMap[key] = neosync_types.Binary
		return v, nil
	case primitive.ObjectID:
		keyTypeMap[key] = neosync_types.ObjectID
		return v, nil
	case primitive.Timestamp:
		keyTypeMap[key] = neosync_types.Timestamp
		return v, nil
	case bson.D:
		m := make(map[string]any)
		for _, elem := range v {
			path := elem.Key
			if key != "" {
				path = fmt.Sprintf("%s.%s", key, elem.Key)
			}
			val, err := parsePrimitives(path, elem.Value, keyTypeMap)
			if err != nil {
				return nil, fmt.Errorf("failed to parse bson.D value for key %q: %w", path, err)
			}
			m[elem.Key] = val
		}
		return m, nil
	case bson.A:
		result := make([]any, len(v))
		for i, item := range v {
			path := fmt.Sprintf("%s[%d]", key, i)
			val, err := parsePrimitives(path, item, keyTypeMap)
			if err != nil {
				return nil, fmt.Errorf("failed to parse bson.A value at index %d for key %q: %w", i, key, err)
			}
			result[i] = val
		}
		return result, nil
	default:
		return v, nil
	}
}
