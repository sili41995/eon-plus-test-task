import { FC } from 'react';
import { IProps } from './AuthFormMessage.types';
import { StyledLink, Text } from './AuthFormMessage.styled';

const AuthFormMessage: FC<IProps> = ({ message, pageLink, pageTitle }) => {
  return (
    <Text>
      <StyledLink to={pageLink}>{pageTitle}</StyledLink> {message}
    </Text>
  );
};

export default AuthFormMessage;
