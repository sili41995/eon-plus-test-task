import { IAuthInitialState } from '@/types/authStore.types';

const initialState: IAuthInitialState = {
  user: {
    id: null,
    login: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export default initialState;
