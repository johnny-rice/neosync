# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from mgmt.v1alpha1 import auth_pb2 as mgmt_dot_v1alpha1_dot_auth__pb2


class AuthServiceStub(object):
    """Service that handles generic Authentication for Neosync
    Today this is mostly used by the CLI to receive authentication information
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.LoginCli = channel.unary_unary(
                '/mgmt.v1alpha1.AuthService/LoginCli',
                request_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.LoginCliRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.LoginCliResponse.FromString,
                _registered_method=True)
        self.RefreshCli = channel.unary_unary(
                '/mgmt.v1alpha1.AuthService/RefreshCli',
                request_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.RefreshCliRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.RefreshCliResponse.FromString,
                _registered_method=True)
        self.CheckToken = channel.unary_unary(
                '/mgmt.v1alpha1.AuthService/CheckToken',
                request_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.CheckTokenRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.CheckTokenResponse.FromString,
                _registered_method=True)
        self.GetAuthorizeUrl = channel.unary_unary(
                '/mgmt.v1alpha1.AuthService/GetAuthorizeUrl',
                request_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthorizeUrlRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthorizeUrlResponse.FromString,
                _registered_method=True)
        self.GetAuthStatus = channel.unary_unary(
                '/mgmt.v1alpha1.AuthService/GetAuthStatus',
                request_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthStatusRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthStatusResponse.FromString,
                _registered_method=True)


class AuthServiceServicer(object):
    """Service that handles generic Authentication for Neosync
    Today this is mostly used by the CLI to receive authentication information
    """

    def LoginCli(self, request, context):
        """Used by the CLI to login to Neosync with OAuth.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RefreshCli(self, request, context):
        """Used by the CLI to refresh an expired Neosync accesss token.
        This should only be used if an access token was previously retrieved from the `LoginCli` or `RefreshCli` methods.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CheckToken(self, request, context):
        """Empty endpoint to simply check if the provided access token is valid
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAuthorizeUrl(self, request, context):
        """Used by the CLI to retrieve an Authorize URL for use with OAuth login.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAuthStatus(self, request, context):
        """Returns the auth status of the API server. Whether or not the backend has authentication enabled.
        This is used by clients to make decisions on whether or not they should send access tokens to the API.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AuthServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'LoginCli': grpc.unary_unary_rpc_method_handler(
                    servicer.LoginCli,
                    request_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.LoginCliRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.LoginCliResponse.SerializeToString,
            ),
            'RefreshCli': grpc.unary_unary_rpc_method_handler(
                    servicer.RefreshCli,
                    request_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.RefreshCliRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.RefreshCliResponse.SerializeToString,
            ),
            'CheckToken': grpc.unary_unary_rpc_method_handler(
                    servicer.CheckToken,
                    request_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.CheckTokenRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.CheckTokenResponse.SerializeToString,
            ),
            'GetAuthorizeUrl': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAuthorizeUrl,
                    request_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthorizeUrlRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthorizeUrlResponse.SerializeToString,
            ),
            'GetAuthStatus': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAuthStatus,
                    request_deserializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthStatusRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthStatusResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'mgmt.v1alpha1.AuthService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('mgmt.v1alpha1.AuthService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class AuthService(object):
    """Service that handles generic Authentication for Neosync
    Today this is mostly used by the CLI to receive authentication information
    """

    @staticmethod
    def LoginCli(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.AuthService/LoginCli',
            mgmt_dot_v1alpha1_dot_auth__pb2.LoginCliRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_auth__pb2.LoginCliResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def RefreshCli(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.AuthService/RefreshCli',
            mgmt_dot_v1alpha1_dot_auth__pb2.RefreshCliRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_auth__pb2.RefreshCliResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def CheckToken(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.AuthService/CheckToken',
            mgmt_dot_v1alpha1_dot_auth__pb2.CheckTokenRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_auth__pb2.CheckTokenResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def GetAuthorizeUrl(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.AuthService/GetAuthorizeUrl',
            mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthorizeUrlRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthorizeUrlResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def GetAuthStatus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.AuthService/GetAuthStatus',
            mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthStatusRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_auth__pb2.GetAuthStatusResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
