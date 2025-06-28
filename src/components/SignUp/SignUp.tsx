import { FC } from 'react';
import SignUpForm from '@/components/SignUpForm';
import { Messages, PagePaths } from '@/constants';
import PageTitle from '@/components/PageTitle';
import AuthFormMessage from '@/components/AuthFormMessage';
import { PageTitles } from '@/constants';
import { Container } from './SignUp.styled';

const SignUp: FC = () => {
  return (
    <Container>
      <PageTitle title={PageTitles.signUp} />
      <SignUpForm />
      <AuthFormMessage
        pageTitle={PageTitles.signIn}
        pageLink={PagePaths.signIn}
        message={Messages.ifAccountAbsent}
      />
    </Container>
  );
};

export default SignUp;
