import { FC } from 'react';
import SignOutBtn from '@/components/SignOutBtn';
import { Container } from './AuthUserControls.styled';

const AuthUserControls: FC = () => {
  return (
    <Container>
      <SignOutBtn />
    </Container>
  );
};

export default AuthUserControls;
