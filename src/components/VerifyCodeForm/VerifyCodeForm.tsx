import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { FormFields, Titles } from '@/constants';
import { chatsService } from '@/services';
import { ICode } from '@/types/chats.types';
import { toasts } from '@/utils';
import AuthFormInput from '@/components/AuthFormInput';
import AuthFormBtn from '@/components/AuthFormBtn';
import { IProps } from './VerifyCodeForm.types';
import { Form } from './VerifyCodeForm.styled';

const VerifyCodeForm: FC<IProps> = ({ updIsTgConnect, phone }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ICode>();

  useEffect(() => {
    const errorsData = Object.values(errors);

    if (errorsData.length) {
      errorsData.map(({ message }) => {
        message && toasts.errorToast(message);
      });
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<ICode> = async (data) => {
    try {
      setIsLoading(true);

      await chatsService.verify({ ...data, phone });

      updIsTgConnect(true);
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
        title={FormFields.code}
        type='text'
        settings={{
          ...register('code', {
            required: true,
          }),
        }}
      />
      <AuthFormBtn title={Titles.verify} disabled={isLoading} />
    </Form>
  );
};

export default VerifyCodeForm;
