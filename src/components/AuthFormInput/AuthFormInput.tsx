import { FC } from 'react';
import { Label, Input, Title } from './AuthFormInput.styled';
import { IProps } from './AuthFormInput.types';

const AuthFormInput: FC<IProps> = ({ title, type, settings }) => {
  return (
    <Label>
      <Title>{title}</Title>
      <Input type={type} {...settings} />
    </Label>
  );
};

export default AuthFormInput;
