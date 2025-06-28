import { FC } from 'react';
import Navigation from '@/components/Navigation';
import { navLinks } from '@/constants';
import GeneralContainer from '@/components/GeneralContainer';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn } from '@/store/auth/selectors';
import AuthUserControls from '@/components/AuthUserControls';
import { StyledHeader, Container } from './Header.styled';

const Header: FC = () => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);

  return (
    <StyledHeader>
      <GeneralContainer>
        <Container>
          <Navigation navLinks={navLinks.privateNavLinks} />
          {isLoggedIn ? (
            <AuthUserControls />
          ) : (
            <Navigation navLinks={navLinks.authNavLinks} />
          )}
        </Container>
      </GeneralContainer>
    </StyledHeader>
  );
};

export default Header;
