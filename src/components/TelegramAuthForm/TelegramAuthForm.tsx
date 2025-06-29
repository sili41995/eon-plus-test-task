import { FC, useState } from 'react';
import VerifyCodeForm from '@/components/VerifyCodeForm';
import RegisterPhoneForm from '@/components/RegisterPhoneForm';
import { StringOrNull } from '@/types/general.types';
import { IProps } from './TelegramAuthForm.types';

const TelegramAuthForm: FC<IProps> = ({ updIsTgConnect }) => {
  const [phone, setPhone] = useState<StringOrNull>(null);

  const updatePhone = (data: string) => {
    setPhone(data);
  };

  return phone ? (
    <VerifyCodeForm updIsTgConnect={updIsTgConnect} phone={phone} />
  ) : (
    <RegisterPhoneForm updatePhone={updatePhone} />
  );
};

export default TelegramAuthForm;
