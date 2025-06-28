import { StorageValue } from 'zustand/middleware';
import { StringOrNull, NumberOrNull } from './general.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IUser {
  id: number;
  login: string;
  password: string;
  email: string;
}

export type NewUser = Omit<IUser, 'id'>;

export type Credentials = Pick<IUser, 'email' | 'password'>;

export type UserInfo = Omit<IUser, 'password'>;

export interface IUserState {
  id: NumberOrNull;
  login: StringOrNull;
  email: StringOrNull;
}

export interface IAuthInitialState {
  user: IUserState;
  token: StringOrNull;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: StringOrNull;
}

export interface IToken {
  access_token: string;
}

export interface ISignOutRes {
  message: string;
}

export interface IAuthState extends IAuthInitialState {
  signUp: (data: NewUser) => Promise<UserInfo | undefined>;
  signIn: (data: Credentials) => Promise<IToken | undefined>;
  signOut: () => Promise<ISignOutRes | undefined>;
  refreshUser: () => Promise<UserInfo | undefined>;
  changeIsRefreshing: (data: boolean) => void;
}

export type SetAuthStateFunc = SetStateFunc<IAuthState>;

export type GetAuthStateFunc = GetStateFunc<IAuthState>;

export interface IAuthStateLS {
  state: IAuthState;
}

export type GetItem =
  | StorageValue<IAuthState>
  | Promise<StorageValue<IAuthState>>
  | null;

export interface IAuthOperationProps {
  set: SetAuthStateFunc;
}

export interface ISignInOperationProps extends IAuthOperationProps {
  data: Credentials;
}

export interface ISignUpOperationProps extends IAuthOperationProps {
  data: NewUser;
}

export interface IChangeIsRefreshingProps extends IAuthOperationProps {
  data: boolean;
}
