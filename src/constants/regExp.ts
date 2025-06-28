import { IRegExp } from '@/types/general.types';

const regExp: IRegExp = {
  email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,4}$/,
  phone: /^\+\d{10,15}$/,
};

export default regExp;
