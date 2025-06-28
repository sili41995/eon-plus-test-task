import { FC } from 'react';
import { Button } from './AuthFormBtn.styled';
import { IProps } from './AuthFormBtn.types';

const AuthFormBtn: FC<IProps> = ({ disabled, title }) => {
  return (
    <Button type='submit' disabled={disabled}>
      {title}
    </Button>
  );
};

export default AuthFormBtn;
