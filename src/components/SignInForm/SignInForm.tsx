import { FormErrorMessages, FormFields, regExp, Titles } from '@/constants';
import { selectIsLoading, selectSignIn } from '@/store/auth/selectors';
import { useAuthStore } from '@/store/store';
import { Credentials } from '@/types/authStore.types';
import { toasts } from '@/utils';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from './SignInForm.styled';
import AuthFormInput from '@/components/AuthFormInput';
import AuthFormBtn from '@/components/AuthFormBtn';

const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Credentials>();
  const signIn = useAuthStore(selectSignIn);
  const isLoading = useAuthStore(selectIsLoading);

  useEffect(() => {
    const errorsData = Object.values(errors);

    if (errorsData.length) {
      errorsData.map(({ message }) => {
        message && toasts.errorToast(message);
      });
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<Credentials> = (data) => {
    signIn(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <AuthFormInput
        title={FormFields.email}
        type='email'
        settings={{
          ...register('email', {
            required: {
              message: FormErrorMessages.emailReqErr,
              value: true,
            },
            pattern: {
              value: regExp.email,
              message: FormErrorMessages.emailRegExpErr,
            },
          }),
        }}
      />
      <AuthFormInput
        title={FormFields.password}
        type='password'
        settings={{
          ...register('password', {
            required: {
              message: FormErrorMessages.passwordReqErr,
              value: true,
            },
          }),
        }}
      />
      <AuthFormBtn title={Titles.signUp} disabled={isLoading} />
    </Form>
  );
};

export default SignInForm;
