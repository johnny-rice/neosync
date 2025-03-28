
// Code generated by Neosync neosync_transformer_generator.go. DO NOT EDIT.
// source: transform_character_scramble.go

package transformers

import (
	"strings"
	"fmt"
	transformer_utils "github.com/nucleuscloud/neosync/worker/pkg/benthos/transformers/utils"
	"github.com/nucleuscloud/neosync/worker/pkg/rng"
	
)

type TransformCharacterScramble struct{}

type TransformCharacterScrambleOpts struct {
	randomizer     rng.Rand
	
	userProvidedRegex *string
}

func NewTransformCharacterScramble() *TransformCharacterScramble {
	return &TransformCharacterScramble{}
}

func NewTransformCharacterScrambleOpts(
	userProvidedRegex *string,
  seedArg *int64,
) (*TransformCharacterScrambleOpts, error) {
	seed, err := transformer_utils.GetSeedOrDefault(seedArg)
  if err != nil {
    return nil, fmt.Errorf("unable to generate seed: %w", err)
	}
	
	return &TransformCharacterScrambleOpts{
		userProvidedRegex: userProvidedRegex,
		randomizer: rng.New(seed),
	}, nil
}

func (o *TransformCharacterScrambleOpts) BuildBloblangString(
	valuePath string,
) string {
	fnStr := []string{
		"value:this.%s",
	}

	params := []any{
		valuePath,
	}

	
	if o.userProvidedRegex != nil {
		fnStr = append(fnStr, "user_provided_regex:%q")
		params = append(params, *o.userProvidedRegex)
	}

	template := fmt.Sprintf("transform_character_scramble(%s)", strings.Join(fnStr, ","))
	return fmt.Sprintf(template, params...)
}

func (t *TransformCharacterScramble) GetJsTemplateData() (*TemplateData, error) {
	return &TemplateData{
		Name: "transformCharacterScramble",
		Description: "",
		Example: "",
	}, nil
}

func (t *TransformCharacterScramble) ParseOptions(opts map[string]any) (any, error) {
	transformerOpts := &TransformCharacterScrambleOpts{}

	var userProvidedRegex *string
	if arg, ok := opts["userProvidedRegex"].(string); ok {
		userProvidedRegex = &arg
	}
	transformerOpts.userProvidedRegex = userProvidedRegex

	var seedArg *int64
	if seedValue, ok := opts["seed"].(int64); ok {
			seedArg = &seedValue
	}
	seed, err := transformer_utils.GetSeedOrDefault(seedArg)
	if err != nil {
		return nil, fmt.Errorf("unable to generate seed: %w", err)
	}
	transformerOpts.randomizer = rng.New(seed)

	return transformerOpts, nil
}
