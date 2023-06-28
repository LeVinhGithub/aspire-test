import { useMutation, MutateOptions } from 'react-query';
import { useSession } from 'next-auth/react';

import {
  resetPasswordRequest,
  resetPasswordVerify,
  EmailProviderSignupResponse,
  signupWithEmail,
  loginWithEmail,
  revokeTokenRequest,
  emailConfirmation,
  logout,
  SuccessResponse,
  TokenResponse,
} from './requests';

export const useResetPasswordVerifyMutation = (
  options: MutateOptions<SuccessResponse, unknown, unknown, unknown> = {},
) => useMutation(resetPasswordVerify, options);

export const useResetPasswordMutation = (
  options: MutateOptions<SuccessResponse, unknown, unknown, unknown> = {},
) => useMutation(resetPasswordRequest, options);
export const useSignupWithEmailMutation = (
  options: MutateOptions<EmailProviderSignupResponse, unknown, unknown, unknown> = {},
) => useMutation(signupWithEmail, options);

export const useLoginWithEmailMutation = (
  options: MutateOptions<unknown, unknown, unknown, unknown> = {},
) => useMutation(loginWithEmail, options);
export const useRevokeTokenRequestMutation = (
  options: MutateOptions<unknown, unknown, unknown, unknown> = {},
) => useMutation(revokeTokenRequest, options);

export const useEmailConfirmation = (
  options: MutateOptions<unknown, unknown, unknown, unknown> = {},
) => useMutation(emailConfirmation, options);

export const useLogoutMutation = (
  options: MutateOptions<unknown, unknown, unknown, unknown> = {},
) => useMutation(logout, options);

export const useAuthenticationData = () => {
  const { data } = useSession();
  return data;
};
