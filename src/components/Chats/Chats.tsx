import { FC } from 'react';
import Loader from '@/components/Loader';
import ChatsList from '@/components/ChatsList';
import { IProps } from './Chats.types';

const Chats: FC<IProps> = ({ chats, isLoading }) => {
  return (
    <>
      <ChatsList chats={chats} />
      {isLoading && <Loader />}
    </>
  );
};

export default Chats;
