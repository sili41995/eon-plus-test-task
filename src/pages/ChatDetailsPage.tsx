import { AxiosError } from 'axios';
import { FC, useEffect, useRef, useState } from 'react';
import GoBackLink from '@/components/GoBackLink';
import PageContent from '@/components/PageContent';
import Chat from '@/components/Chat';
import Loader from '@/components/Loader';
import { MessagesOrNull } from '@/types/chats.types';
import { toasts } from '@/utils';
import { chatsService } from '@/services';
import { useDynamicParam } from '@/hooks';
import { Titles } from '@/constants';

const ChatDetailsPage: FC = () => {
  const [messages, setMessages] = useState<MessagesOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatId = useDynamicParam();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      content.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  useEffect(() => {
    const getMessages = async (chatId: string) => {
      try {
        setIsLoading(true);

        const response = await chatsService.getMessagesByChatId(chatId);

        setMessages(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.detail;

          toasts.errorToast(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    chatId && getMessages(chatId);
  }, [chatId]);

  return (
    <PageContent contentRef={contentRef}>
      <GoBackLink title={Titles.close} />
      {messages && <Chat messages={messages} />}
      {isLoading && <Loader />}
    </PageContent>
  );
};

export default ChatDetailsPage;
