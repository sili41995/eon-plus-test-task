import { useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FormErrorMessages,
  FormFields,
  PagePaths,
  regExp,
  Titles,
} from '@/constants';
import { selectIsLoading, selectSignUp } from '@/store/auth/selectors';
import { useAuthStore } from '@/store/store';
import { NewUser } from '@/types/authStore.types';
import { toasts } from '@/utils';
import AuthFormInput from '@/components/AuthFormInput';
import AuthFormBtn from '@/components/AuthFormBtn';
import { Form } from './SignUpForm.styled';

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewUser>();
  const signUp = useAuthStore(selectSignUp);
  const isLoading = useAuthStore(selectIsLoading);
  const navigate = useNavigate();

  useEffect(() => {
    const errorsData = Object.values(errors);

    if (errorsData.length) {
      errorsData.map(({ message }) => {
        message && toasts.errorToast(message);
      });
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<NewUser> = async (data) => {
    try {
      await signUp(data);

      navigate(PagePaths.signIn);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <AuthFormInput
        title={FormFields.login}
        type='text'
        settings={{
          ...register('login', {
            required: {
              message: FormErrorMessages.loginReqErr,
              value: true,
            },
          }),
        }}
      />
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

export default SignUpForm;
