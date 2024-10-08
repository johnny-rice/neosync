---
title: Javascript Transformer
slug: /transformers/javascript
hide_title: false
id: javascript
description: Learn about Neosync's javascript transformer
---
<!-- prettier-ignore-start -->
<!--
	Code generated by Neosync neosync_js_transformer_docs_generator.go. DO NOT EDIT.
-->

# Neosync Javascript Transformer Functions

Learn about Neosync's Javascript transformer and generator functions, which provide a wide range of capabilities for data transformation and
generation within the Javascript Transformer and Generator. Explore detailed descriptions and examples to effectively utilize these functions in your jobs.

## Transformers

Neosync's transformer functions allow you to manipulate and transform data values with ease.
These functions are designed to provide powerful and flexible data transformation capabilities within your jobs.
Each transformer function accepts a value and a configuration object as arguments.
The source column value is accessible via the `value` keyword, while additional columns can be referenced using `input.{column_name}`.
<br/>



<!--
source: transform_character_scramble.go
-->

### transformCharacterScramble

Transforms an existing string value by scrambling the characters while maintaining the format.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| userProvidedRegex | string |  | false | A custom regular expression. This regex is used to manipulate input data during the transformation process.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.<br/>

**Example**

```javascript

const newValue = neosync.transformCharacterScramble(value, { 
	userProvidedRegex: "",  
	seed: 1, 
});

```
<br/>


<!--
source: transform_e164_phone_number.go
-->

### transformE164PhoneNumber

Transforms an existing E164 formatted phone number.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| preserveLength | bool |  | true | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| maxLength | int64 |  | false | Specifies the maximum length for the transformed data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.<br/>

**Example**

```javascript

const newValue = neosync.transformE164PhoneNumber(value, { 
	preserveLength: false,  
	maxLength: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: transform_email.go
-->

### transformEmail

Transforms an existing email address.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| preserveLength | bool | false | false | Specifies the maximum length for the transformed data. This field ensures that the output does not exceed a certain number of characters.
| preserveDomain | bool | false | false | A boolean indicating whether the domain part of the email should be preserved.
| excludedDomains | any | [] | false | A list of domains that should be excluded from the transformation
| maxLength | int64 | 10000 | false | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| seed | int64 |  | false | An optional seed value used for generating deterministic transformations.
| emailType | string | 'uuidv4' | false | Specifies the type of email to transform, with options including `uuidv4`, `fullname`, or `any`.
| invalidEmailAction | string | 'reject' | false | Specifies the action to take when an invalid email is encountered, with options including `reject`, `passthrough`, `null`, or `generate`.<br/>

**Example**

```javascript

const newValue = neosync.transformEmail(value, { 
	preserveLength: false, 
	preserveDomain: false, 
	excludedDomains: [], 
	maxLength: 10000, 
	seed: 1,  
	emailType: 'uuidv4', 
	invalidEmailAction: 'reject',
});

```
<br/>


<!--
source: transform_first_name.go
-->

### transformFirstName

Transforms an existing first name

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 10000 | false | Specifies the maximum length for the transformed data. This field ensures that the output does not exceed a certain number of characters.
| preserveLength | bool | false | false | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| seed | int64 |  | false | An optional seed value used for generating deterministic transformations.<br/>

**Example**

```javascript

const newValue = neosync.transformFirstName(value, { 
	maxLength: 10000, 
	preserveLength: false, 
	seed: 1, 
});

```
<br/>


<!--
source: transform_float.go
-->

### transformFloat64

Transforms an existing float value.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| randomizationRangeMin | float64 |  | true | Specifies the minimum value for the range of the float.
| randomizationRangeMax | float64 |  | true | Specifies the maximum value for the randomization range of the float.
| precision | int64 |  | false | An optional parameter that defines the number of significant digits for the float.
| scale | int64 |  | false | An optional parameter that defines the number of decimal places for the float.
| seed | int64 |  | false | An optional seed value used for generating deterministic transformations.<br/>

**Example**

```javascript

const newValue = neosync.transformFloat64(value, { 
	randomizationRangeMin: 1.12,  
	randomizationRangeMax: 1.12,  
	precision: 1,  
	scale: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: transform_full_name.go
-->

### transformFullName

Transforms an existing full name.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 10000 | false | 
| preserveLength | bool | false | false | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| seed | int64 |  | false | An optional seed value used for generating deterministic transformations.<br/>

**Example**

```javascript

const newValue = neosync.transformFullName(value, { 
	maxLength: 10000, 
	preserveLength: false, 
	seed: 1, 
});

```
<br/>


<!--
source: transform_int64.go
-->

### transformInt64

Transforms an existing integer value.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| randomizationRangeMin | int64 |  | true | Specifies the minimum value for the range of the int.
| randomizationRangeMax | int64 |  | true | Specifies the maximum value for the range of the int.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.<br/>

**Example**

```javascript

const newValue = neosync.transformInt64(value, { 
	randomizationRangeMin: 1,  
	randomizationRangeMax: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: transform_int64_phone_number.go
-->

### transformInt64PhoneNumber

Transforms an existing phone number that is typed as an integer

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| preserveLength | bool |  | true | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.<br/>

**Example**

```javascript

const newValue = neosync.transformInt64PhoneNumber(value, { 
	preserveLength: false,  
	seed: 1, 
});

```
<br/>


<!--
source: transform_lastname.go
-->

### transformLastName

Transforms an existing last name.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 10000 | false | Specifies the maximum length for the transformed data. This field ensures that the output does not exceed a certain number of characters.
| preserveLength | bool | false | false | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| seed | int64 |  | false | An optional seed value used for generating deterministic transformations.<br/>

**Example**

```javascript

const newValue = neosync.transformLastName(value, { 
	maxLength: 10000, 
	preserveLength: false, 
	seed: 1, 
});

```
<br/>


<!--
source: transform_string.go
-->

### transformString

Transforms an existing string value.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| preserveLength | bool | false | false | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| minLength | int64 | 1 | false | Specifies the minimum length of the transformed value.
| maxLength | int64 | 20 | false | Specifies the maximum length of the transformed value.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.<br/>

**Example**

```javascript

const newValue = neosync.transformString(value, { 
	preserveLength: false, 
	minLength: 1, 
	maxLength: 20, 
	seed: 1, 
});

```
<br/>


<!--
source: transform_string_phone_number.go
-->

### transformStringPhoneNumber

Transforms an existing phone number that is typed as a string.

**Parameters**

**Value**  
Type: Any  
Description: Value that will be transformed

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| preserveLength | bool |  | true | Whether the original length of the input data should be preserved during transformation. If set to true, the transformation logic will ensure that the output data has the same length as the input data.
| maxLength | int64 |  | true | Specifies the maximum length for the transformed data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.<br/>

**Example**

```javascript

const newValue = neosync.transformStringPhoneNumber(value, { 
	preserveLength: false,  
	maxLength: 1,  
	seed: 1, 
});

```
<br/>


## Generators

Neosync's generator functions enable the creation of various data values, facilitating the generation of realistic and diverse data for
testing and development purposes. These functions are designed to provide robust and versatile data generation capabilities within your jobs.
Each generator function accepts a configuration object as an argument.

<br/>


<!--
source: generate_bool.go
-->

### generateBool

Generates a boolean value at random.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateBool({ 
	seed: 1, 
});

```
<br/>


<!--
source: generate_card_number.go
-->

### generateCardNumber

Generates a card number.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| validLuhn | bool |  | true | A boolean indicating whether the generated value should pass the Luhn algorithm check.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateCardNumber({ 
	validLuhn: false,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_categorical.go
-->

### generateCategorical

Randomly selects a value from a defined set of categorical values.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| categories | string |  | true | A list of comma-separated string values to randomly select from.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateCategorical({ 
	categories: "",  
	seed: 1, 
});

```
<br/>


<!--
source: generate_city.go
-->

### generateCity

Randomly selects a city from a list of predefined US cities.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 |  | true | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateCity({ 
	maxLength: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_country.go
-->

### generateCountry

Randomly selects a Country and either returns the two character country code or the full country name.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| generateFullName | bool | false | false | If true returns the full country name instead of the two character country code.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateCountry({ 
	generateFullName: false, 
	seed: 1, 
});

```
<br/>


<!--
source: generate_email.go
-->

### generateEmail

Generates a new randomized email address.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 100000 | false | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| emailType | string | 'uuidv4' | false | Specifies the type of email type to generate, with options including `uuidv4`, `fullname`, or `any`.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateEmail({ 
	maxLength: 100000, 
	emailType: 'uuidv4', 
	seed: 1, 
});

```
<br/>


<!--
source: generate_first_name.go
-->

### generateFirstName

Generates a random first name.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 10000 | false | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateFirstName({ 
	maxLength: 10000, 
	seed: 1, 
});

```
<br/>


<!--
source: generate_float.go
-->

### generateFloat64

Generates a random float64 value.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| randomizeSign | bool | false | false | A boolean indicating whether the sign of the float should be randomized.
| min | float64 |  | true | Specifies the minimum value for the generated float.
| max | float64 |  | true | Specifies the maximum value for the generated float
| precision | int64 |  | false | An optional parameter that defines the number of significant digits for the generated float.
| scale | int64 |  | false | An optional parameter that defines the number of decimal places for the generated float.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateFloat64({ 
	randomizeSign: false, 
	min: 1.12,  
	max: 1.12,  
	precision: 1,  
	scale: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_full_address.go
-->

### generateFullAddress

Randomly generates a street address.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 |  | true | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateFullAddress({ 
	maxLength: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_full_name.go
-->

### generateFullName

Generates a new full name consisting of a first and last name.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 10000 | false | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateFullName({ 
	maxLength: 10000, 
	seed: 1, 
});

```
<br/>


<!--
source: generate_gender.go
-->

### generateGender

Randomly generates one of the following genders: female, male, undefined, nonbinary.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| abbreviate | bool | false | false | Shortens length of generated value to 1.
| maxLength | int64 | 10000 | false | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateGender({ 
	abbreviate: false, 
	maxLength: 10000, 
	seed: 1, 
});

```
<br/>


<!--
source: generate_int64.go
-->

### generateInt64

Generates a random integer value with a default length of 4 unless the Integer Length or Preserve Length parameters are defined.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| randomizeSign | bool | false | false | A boolean indicating whether the sign of the float should be randomized.
| min | int64 |  | true | Specifies the minimum value for the generated int.
| max | int64 |  | true | Specifies the maximum value for the generated int.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateInt64({ 
	randomizeSign: false, 
	min: 1,  
	max: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_int64_phone_number.go
-->

### generateInt64PhoneNumber

Generates a new phone number of type int64 with a default length of 10.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateInt64PhoneNumber({ 
	seed: 1, 
});

```
<br/>


<!--
source: generate_international_phone_number.go
-->

### generateInternationalPhoneNumber

Generates a Generate phone number in e164 format.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| min | int64 |  | true | Specifies the minimum value for the generated phone number.
| max | int64 |  | true | Specifies the maximum value for the generated phone number.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateInternationalPhoneNumber({ 
	min: 1,  
	max: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_last_name.go
-->

### generateLastName

Generates a random last name.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 10000 | false | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateLastName({ 
	maxLength: 10000, 
	seed: 1, 
});

```
<br/>


<!--
source: generate_random_string.go
-->

### generateRandomString

Creates a randomly ordered alphanumeric string with a default length of 10 unless the String Length parameter are defined.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| min | int64 |  | true | Specifies the minimum length for the generated string.
| max | int64 |  | true | Specifies the maximum length for the generated string.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateRandomString({ 
	min: 1,  
	max: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_sha256hash.go
-->

### generateSHA256Hash

SHA256 hashes a randomly generated value.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
<br/>

**Example**

```javascript

const newValue = neosync.generateSHA256Hash({});

```
<br/>


<!--
source: generate_ssn.go
-->

### generateSSN

Generates a completely random social security numbers including the hyphens in the format xxx-xx-xxxx.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateSSN({ 
	seed: 1, 
});

```
<br/>


<!--
source: generate_state.go
-->

### generateState

Randomly selects a US state and either returns the two character state code or the full state name.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| generateFullName | bool | false | false | If true returns the full state name instead of the two character state code.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateState({ 
	generateFullName: false, 
	seed: 1, 
});

```
<br/>


<!--
source: generate_street_address.go
-->

### generateStreetAddress

Randomly generates a street address.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 |  | true | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateStreetAddress({ 
	maxLength: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_string_phone_number.go
-->

### generateStringPhoneNumber

Generates a Generate phone number and returns it as a string.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| min | int64 |  | true | Specifies the minimum length for the generated phone number.
| max | int64 |  | true | Specifies the maximum length for the generated phone number.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateStringPhoneNumber({ 
	min: 1,  
	max: 1,  
	seed: 1, 
});

```
<br/>


<!--
source: generate_unix_timestamp.go
-->

### generateUnixTimestamp

Randomly generates a Unix timestamp.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateUnixTimestamp({ 
	seed: 1, 
});

```
<br/>


<!--
source: generate_username.go
-->

### generateUsername

Randomly generates a username

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| maxLength | int64 | 10000 | false | Specifies the maximum length for the generated data. This field ensures that the output does not exceed a certain number of characters.
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateUsername({ 
	maxLength: 10000, 
	seed: 1, 
});

```
<br/>


<!--
source: generate_utc_timestamp.go
-->

### generateUTCTimestamp

Randomly generates a UTC timestamp.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateUTCTimestamp({ 
	seed: 1, 
});

```
<br/>


<!--
source: generate_uuid.go
-->

### generateUUID

Generates a new UUIDv4 id.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| includeHyphens | bool | true | false | Determines whether the generated UUID should include hyphens. If set to true, the UUID will be formatted with hyphens (e.g., d853d251-e135-4fe4-a4eb-0aea6bfaf645). If set to false, the hyphens will be omitted (e.g., d853d251e1354fe4a4eb0aea6bfaf645).
<br/>

**Example**

```javascript

const newValue = neosync.generateUUID({ 
	includeHyphens: true,
});

```
<br/>


<!--
source: generate_zipcode.go
-->

### generateZipcode

Randomly selects a zip code from a list of predefined US zipcodes.

**Parameters**

**Config**

| Field    | Type | Default | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| seed | int64 |  | false | An optional seed value used to generate deterministic outputs.
<br/>

**Example**

```javascript

const newValue = neosync.generateZipcode({ 
	seed: 1, 
});

```
<br/>

<!-- prettier-ignore-end -->