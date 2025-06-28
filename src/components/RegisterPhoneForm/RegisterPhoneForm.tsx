import { FormFields, regExp, Titles } from '@/constants';
import { IPhone } from '@/types/chats.types';
import { toasts } from '@/utils';
import { AxiosError } from 'axios';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from './RegisterPhoneForm.styled';
import AuthFormInput from '@/components/AuthFormInput';
import AuthFormBtn from '@/components/AuthFormBtn';
import { IProps } from './RegisterPhoneForm.types';

const RegisterPhoneForm: FC<IProps> = ({ updatePhone }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IPhone>();

  useEffect(() => {
    const errorsData = Object.entries(errors);

    if (errorsData.length) {
      errorsData.map((item) => console.log(item));
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<IPhone> = async (data) => {
    try {
      setIsLoading(true);
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
            pattern: regExp.phone,
          }),
        }}
      />
      <AuthFormBtn title={Titles.connect} disabled={isLoading} />
    </Form>
  );
};

export default RegisterPhoneForm;
