import {
  Credentials,
  ISignOutRes,
  IToken,
  IUser,
  NewUser,
  UserInfo,
} from '@/types/authStore.types';
import HttpService from './http.service';

class AuthService extends HttpService {
  constructor() {
    super();
  }

  async signUp(data: NewUser): Promise<IUser> {
    const response = await this.post<IUser, NewUser>({
      url: 'auth/sign-up',
      data,
    });

    return response.data;
  }

  async signIn(data: Credentials): Promise<IToken> {
    const response = await this.post<IToken, Credentials>({
      url: 'auth/sign-in',
      data,
    });

    return response.data;
  }

  async signOut(): Promise<ISignOutRes> {
    const response = await this.post<ISignOutRes, undefined>({
      url: 'auth/sign-out',
    });

    return response.data;
  }

  async refreshUser(): Promise<UserInfo> {
    const response = await this.get<UserInfo>({
      url: 'auth/current',
    });

    return response.data;
  }
}

const authService = new AuthService();

export default authService;
