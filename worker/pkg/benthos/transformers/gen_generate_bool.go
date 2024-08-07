
// Code generated by Neosync neosync_transformer_generator.go. DO NOT EDIT.
// source: generate_bool.go

package transformers

import (
	"fmt"
	
	transformer_utils "github.com/nucleuscloud/neosync/worker/pkg/benthos/transformers/utils"
	"github.com/nucleuscloud/neosync/worker/pkg/rng"
	
)

type GenerateBool struct{}

type GenerateBoolOpts struct {
	randomizer     rng.Rand
	
}

func NewGenerateBool() *GenerateBool {
	return &GenerateBool{}
}

func (t *GenerateBool) GetJsTemplateData() (*TemplateData, error) {
	return &TemplateData{
		Name: "generateBool",
		Description: "Generates a boolean value at random.",
		Example: "",
	}, nil
}

func (t *GenerateBool) ParseOptions(opts map[string]any) (any, error) {
	transformerOpts := &GenerateBoolOpts{}

	var seed int64
	seedArg, ok := opts["seed"].(int64)
	if ok {
		seed = seedArg
	} else {
		var err error
		seed, err = transformer_utils.GenerateCryptoSeed()
		if err != nil {
			return nil, fmt.Errorf("unable to generate seed: %w", err)
		}
	}
	transformerOpts.randomizer = rng.New(seed)

	return transformerOpts, nil
}
