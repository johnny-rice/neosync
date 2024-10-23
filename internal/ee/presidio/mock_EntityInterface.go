// Code generated by mockery. DO NOT EDIT.

package presidioapi

import (
	context "context"

	mock "github.com/stretchr/testify/mock"
)

// MockEntityInterface is an autogenerated mock type for the EntityInterface type
type MockEntityInterface struct {
	mock.Mock
}

type MockEntityInterface_Expecter struct {
	mock *mock.Mock
}

func (_m *MockEntityInterface) EXPECT() *MockEntityInterface_Expecter {
	return &MockEntityInterface_Expecter{mock: &_m.Mock}
}

// GetSupportedentitiesWithResponse provides a mock function with given fields: ctx, params, reqEditors
func (_m *MockEntityInterface) GetSupportedentitiesWithResponse(ctx context.Context, params *GetSupportedentitiesParams, reqEditors ...RequestEditorFn) (*GetSupportedentitiesResponse, error) {
	_va := make([]interface{}, len(reqEditors))
	for _i := range reqEditors {
		_va[_i] = reqEditors[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, params)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	if len(ret) == 0 {
		panic("no return value specified for GetSupportedentitiesWithResponse")
	}

	var r0 *GetSupportedentitiesResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *GetSupportedentitiesParams, ...RequestEditorFn) (*GetSupportedentitiesResponse, error)); ok {
		return rf(ctx, params, reqEditors...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *GetSupportedentitiesParams, ...RequestEditorFn) *GetSupportedentitiesResponse); ok {
		r0 = rf(ctx, params, reqEditors...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*GetSupportedentitiesResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *GetSupportedentitiesParams, ...RequestEditorFn) error); ok {
		r1 = rf(ctx, params, reqEditors...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockEntityInterface_GetSupportedentitiesWithResponse_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetSupportedentitiesWithResponse'
type MockEntityInterface_GetSupportedentitiesWithResponse_Call struct {
	*mock.Call
}

// GetSupportedentitiesWithResponse is a helper method to define mock.On call
//   - ctx context.Context
//   - params *GetSupportedentitiesParams
//   - reqEditors ...RequestEditorFn
func (_e *MockEntityInterface_Expecter) GetSupportedentitiesWithResponse(ctx interface{}, params interface{}, reqEditors ...interface{}) *MockEntityInterface_GetSupportedentitiesWithResponse_Call {
	return &MockEntityInterface_GetSupportedentitiesWithResponse_Call{Call: _e.mock.On("GetSupportedentitiesWithResponse",
		append([]interface{}{ctx, params}, reqEditors...)...)}
}

func (_c *MockEntityInterface_GetSupportedentitiesWithResponse_Call) Run(run func(ctx context.Context, params *GetSupportedentitiesParams, reqEditors ...RequestEditorFn)) *MockEntityInterface_GetSupportedentitiesWithResponse_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]RequestEditorFn, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(RequestEditorFn)
			}
		}
		run(args[0].(context.Context), args[1].(*GetSupportedentitiesParams), variadicArgs...)
	})
	return _c
}

func (_c *MockEntityInterface_GetSupportedentitiesWithResponse_Call) Return(_a0 *GetSupportedentitiesResponse, _a1 error) *MockEntityInterface_GetSupportedentitiesWithResponse_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockEntityInterface_GetSupportedentitiesWithResponse_Call) RunAndReturn(run func(context.Context, *GetSupportedentitiesParams, ...RequestEditorFn) (*GetSupportedentitiesResponse, error)) *MockEntityInterface_GetSupportedentitiesWithResponse_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockEntityInterface creates a new instance of MockEntityInterface. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockEntityInterface(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockEntityInterface {
	mock := &MockEntityInterface{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}