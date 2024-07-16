// Code generated by mockery. DO NOT EDIT.

package neosync_gcp

import (
	context "context"
	slog "log/slog"

	mock "github.com/stretchr/testify/mock"
)

// MockManagerInterface is an autogenerated mock type for the ManagerInterface type
type MockManagerInterface struct {
	mock.Mock
}

type MockManagerInterface_Expecter struct {
	mock *mock.Mock
}

func (_m *MockManagerInterface) EXPECT() *MockManagerInterface_Expecter {
	return &MockManagerInterface_Expecter{mock: &_m.Mock}
}

// GetClient provides a mock function with given fields: ctx, logger
func (_m *MockManagerInterface) GetClient(ctx context.Context, logger *slog.Logger) (ClientInterface, error) {
	ret := _m.Called(ctx, logger)

	if len(ret) == 0 {
		panic("no return value specified for GetClient")
	}

	var r0 ClientInterface
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *slog.Logger) (ClientInterface, error)); ok {
		return rf(ctx, logger)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *slog.Logger) ClientInterface); ok {
		r0 = rf(ctx, logger)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(ClientInterface)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *slog.Logger) error); ok {
		r1 = rf(ctx, logger)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// MockManagerInterface_GetClient_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetClient'
type MockManagerInterface_GetClient_Call struct {
	*mock.Call
}

// GetClient is a helper method to define mock.On call
//   - ctx context.Context
//   - logger *slog.Logger
func (_e *MockManagerInterface_Expecter) GetClient(ctx interface{}, logger interface{}) *MockManagerInterface_GetClient_Call {
	return &MockManagerInterface_GetClient_Call{Call: _e.mock.On("GetClient", ctx, logger)}
}

func (_c *MockManagerInterface_GetClient_Call) Run(run func(ctx context.Context, logger *slog.Logger)) *MockManagerInterface_GetClient_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*slog.Logger))
	})
	return _c
}

func (_c *MockManagerInterface_GetClient_Call) Return(_a0 ClientInterface, _a1 error) *MockManagerInterface_GetClient_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockManagerInterface_GetClient_Call) RunAndReturn(run func(context.Context, *slog.Logger) (ClientInterface, error)) *MockManagerInterface_GetClient_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockManagerInterface creates a new instance of MockManagerInterface. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockManagerInterface(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockManagerInterface {
	mock := &MockManagerInterface{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}