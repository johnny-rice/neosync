
// Code generated by Neosync neosync_transformer_generator.go. DO NOT EDIT.
// source: generate_unix_timestamp.go

package transformers

import (
)

type GenerateUnixTimestamp struct{}

type GenerateUnixTimestampOpts struct {
}

func NewGenerateUnixTimestamp() *GenerateUnixTimestamp {
	return &GenerateUnixTimestamp{}
}

func (t *GenerateUnixTimestamp) GetJsTemplateData() (*TemplateData, error) {
	return &TemplateData{
		Name: "generateUnixTimestamp",
		Description: "",
	}, nil
}

func (t *GenerateUnixTimestamp) ParseOptions(opts map[string]any) (any, error) {
	transformerOpts := &GenerateUnixTimestampOpts{}

	return transformerOpts, nil
}