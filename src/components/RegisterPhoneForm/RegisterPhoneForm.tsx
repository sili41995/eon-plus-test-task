import { SubmitHandler, useForm } from 'react-hook-form';
import { FC, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { FormErrorMessages, FormFields, regExp, Titles } from '@/constants';
import { IPhone } from '@/types/chats.types';
import { toasts } from '@/utils';
import AuthFormInput from '@/components/AuthFormInput';
import AuthFormBtn from '@/components/AuthFormBtn';
import { chatsService } from '@/services';
import { Form } from './RegisterPhoneForm.styled';
import { IProps } from './RegisterPhoneForm.types';

const RegisterPhoneForm: FC<IProps> = ({ updatePhone }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IPhone>();

  useEffect(() => {
    const errorsData = Object.values(errors);

    if (errorsData.length) {
      errorsData.map(({ message }) => {
        message && toasts.errorToast(message);
      });
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<IPhone> = async (data) => {
    try {
      setIsLoading(true);

      await chatsService.connect(data);

      updatePhone(data.phone);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data.detail;

        toasts.errorToast(errorMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <AuthFormInput
        title={FormFields.phone}
        type='tel'
        settings={{
          ...register('phone', {
            required: true,
            pattern: {
              value: regExp.phone,
              message: FormErrorMessages.phoneRegExpErr,
            },
          }),
        }}
      />
      <AuthFormBtn title={Titles.connect} disabled={isLoading} />
    </Form>
  );
};

export default RegisterPhoneForm;
