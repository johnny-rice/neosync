
// Code generated by Neosync neosync_transformer_generator.go. DO NOT EDIT.
// source: transform_email.go

package transformers

import (
	"fmt"
	
	transformer_utils "github.com/nucleuscloud/neosync/worker/pkg/benthos/transformers/utils"
	"github.com/nucleuscloud/neosync/worker/pkg/rng"
	
)

type TransformEmail struct{}

type TransformEmailOpts struct {
	randomizer     rng.Rand
	
	preserveLength bool
	preserveDomain bool
	excludedDomains any
	maxLength int64
	emailType string
	invalidEmailAction string
}

func NewTransformEmail() *TransformEmail {
	return &TransformEmail{}
}

func (t *TransformEmail) GetJsTemplateData() (*TemplateData, error) {
	return &TemplateData{
		Name: "transformEmail",
		Description: "Transforms an existing email address.",
		Example: "",
	}, nil
}

func (t *TransformEmail) ParseOptions(opts map[string]any) (any, error) {
	transformerOpts := &TransformEmailOpts{}

	preserveLength, ok := opts["preserveLength"].(bool)
	if !ok {
		preserveLength = false
	}
	transformerOpts.preserveLength = preserveLength

	preserveDomain, ok := opts["preserveDomain"].(bool)
	if !ok {
		preserveDomain = false
	}
	transformerOpts.preserveDomain = preserveDomain

	excludedDomains, ok := opts["excludedDomains"].(any)
	if !ok {
		excludedDomains = []any{}
	}
	transformerOpts.excludedDomains = excludedDomains

	maxLength, ok := opts["maxLength"].(int64)
	if !ok {
		maxLength = 10000
	}
	transformerOpts.maxLength = maxLength

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

	emailType, ok := opts["emailType"].(string)
	if !ok {
		emailType = GenerateEmailType_UuidV4.String()
	}
	transformerOpts.emailType = emailType

	invalidEmailAction, ok := opts["invalidEmailAction"].(string)
	if !ok {
		invalidEmailAction = InvalidEmailAction_Reject.String()
	}
	transformerOpts.invalidEmailAction = invalidEmailAction

	return transformerOpts, nil
}
