import { AxiosError } from 'axios';
import {
  IAuthOperationProps,
  ISignInOperationProps,
  ISignOutRes,
  ISignUpOperationProps,
  IToken,
  IUser,
  UserInfo,
  IChangeIsRefreshingProps,
} from '@/types/authStore.types';
import { authService } from '@/services';
import initialState from './initialState';
import operationWrapper from './operationWrapper';

const signUpOperation = async ({
  set,
  data,
}: ISignUpOperationProps): Promise<IUser | undefined> => {
  const result = await authService.signUp(data);

  set({
    user: {
      id: result.id,
      login: result.login,
      email: result.email,
    },
  });

  return result;
};

const signInOperation = async ({
  set,
  data,
}: ISignInOperationProps): Promise<IToken | undefined> => {
  const result = await authService.signIn(data);

  set({
    token: result.access_token,
    isLoggedIn: true,
  });

  return result;
};

const signOutOperation = async ({
  set,
}: IAuthOperationProps): Promise<ISignOutRes | undefined> => {
  const result = await authService.signOut();

  set(initialState);

  return result;
};

export const refreshUser = async ({
  set,
}: IAuthOperationProps): Promise<UserInfo | undefined> => {
  try {
    set({ isRefreshing: true, isLoading: true, error: initialState.error });

    const result = await authService.refreshUser();

    set({
      user: result,
      isLoggedIn: true,
    });

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.detail;

      set({ error: errorMessage });
      throw new Error(errorMessage);
    }
  } finally {
    set({
      isLoading: initialState.isLoading,
      isRefreshing: false,
    });
  }
};

export const changeIsRefreshing = ({
  set,
  data,
}: IChangeIsRefreshingProps): void => {
  set({ isRefreshing: data });
};

export const signUp = operationWrapper(signUpOperation);
export const signIn = operationWrapper(signInOperation);
export const signOut = operationWrapper(signOutOperation);
