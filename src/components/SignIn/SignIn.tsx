import { FC } from 'react';
import SignInForm from '@/components/SignInForm';
import { Messages, PagePaths } from '@/constants';
import PageTitle from '@/components/PageTitle';
import AuthFormMessage from '@/components/AuthFormMessage';
import { PageTitles } from '@/constants';
import { Container } from './SignIn.styled';

const SignIn: FC = () => {
  return (
    <Container>
      <PageTitle title={PageTitles.signIn} />
      <SignInForm />
      <AuthFormMessage
        pageTitle={PageTitles.signUp}
        pageLink={PagePaths.signUp}
        message={Messages.ifAccountExist}
      />
    </Container>
  );
};

export default SignIn;
