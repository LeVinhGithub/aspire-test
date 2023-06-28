import { serviceFetch, objectToFormData } from '@utils/service';
import pluralize from 'pluralize';
import { getRoute } from '@utils/route';
import authenticationSession from '@utils/authenticationSession';
import { STORAGE_KEYS } from '@constants/storage';
import { signIn } from './auth';

export type SuccessResponse = { success: true };

export type TokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  resource_owner: string;
  resource_id: number;
  created_at: Date;
  refresh_token_expires_in: number;
};

export type ResetPasswordRequestBody = {
  table: string;
  email: string;
};

export const resetPasswordRequest = (body: ResetPasswordRequestBody): Promise<SuccessResponse> => {
  const { table, ...rest } = body;
  const model = pluralize.singular(table);
  return serviceFetch(
    {
      url: getRoute('/api/:table\\_reset_password_requests', {
        table: table,
      }),
      method: 'POST',
      data: rest,
    },
    model,
  );
};

export type ResetPasswordVerifyRequestBody = {
  table: string;
  resetToken: string;
  password: string;
  passwordConfirmation: string;
};

export const resetPasswordVerify = (
  body: ResetPasswordVerifyRequestBody,
): Promise<SuccessResponse> => {
  const { table, ...rest } = body;
  const model = pluralize.singular(table);
  return serviceFetch(
    {
      url: getRoute('/api/:table\\_verify_reset_password_requests', {
        table: table,
      }),
      method: 'POST',
      data: rest,
    },
    model,
  );
};
export type UsersRegistration = {
  table: string;
  user: {
    password: string;
    password_confirmation: string;
    email: string;
  };
};
export type EmailProviderSignupBodyRequest = UsersRegistration;
export type EmailProviderSignupResponse = {
  id: number;
};

export const signupWithEmail = (
  body: EmailProviderSignupBodyRequest,
): Promise<EmailProviderSignupResponse> => {
  const { table, ...rest } = body;
  return serviceFetch({
    url: getRoute('/api/:table\\_registrations', { table }),
    method: 'POST',
    data: rest,
  });
};

export type EmailProviderLoginRequestBody = {
  table: string;
  email: string;
  password: string;
};

export const loginWithEmail = async (body: EmailProviderLoginRequestBody) => {
  const result = await signIn('emailLogin', {
    table: body.table,
    email: body.email,
    password: body.password,
    redirect: false,
  });
  if (!result || result.error) {
    throw new Error(result?.error || 'Invalid result');
  }
  const info = authenticationSession.getAuthentication();
  return { ...info };
};

export type RevokeTokenRequestBody = {
  token: string;
  token_type_hint?: string;
};

export const revokeTokenRequest = async (body: RevokeTokenRequestBody) => {
  try {
    await signIn('revokeToken', {
      token: body.token,
      token_type_hint: body.token_type_hint,
      redirect: false,
    });
  } finally {
    return true;
  }
};

export type EmailConfirmationRequestBody = {
  table: string;
  confirmation_token: string;
};

export const emailConfirmation = async (body: EmailConfirmationRequestBody) => {
  const result = await signIn('confirmationToken', {
    table: body.table,
    confirmation_token: body.confirmation_token,
    redirect: false,
  });
  if (!result || result.error) {
    throw new Error(result?.error || 'Invalid result');
  }
  const info = authenticationSession.getAuthentication();
  return { ...info };
};

export const logout = async (options?: SignOutParams) => {
  authenticationSession.clearAuthentication();
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.AUTHENTICATION);
    localStorage.removeItem(STORAGE_KEYS.TOKEN_CREATED_TIME);
  }
};
