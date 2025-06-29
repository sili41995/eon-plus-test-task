import { Outlet } from 'react-router-dom';
import { AxiosError } from 'axios';
import { FC, useEffect, useState } from 'react';
import Section from '@/components/Section';
import GeneralContainer from '@/components/GeneralContainer';
import PageContent from '@/components/PageContent';
import PageTitle from '@/components/PageTitle';
import { PageTitles } from '@/constants';
import { ChatsOrNull } from '@/types/chats.types';
import { toasts } from '@/utils';
import { chatsService } from '@/services';
import Chats from '@/components/Chats';
import TelegramAuthForm from '@/components/TelegramAuthForm';

const ChatsPage: FC = () => {
  const [isTgConnect, setIsTgConnect] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatsOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updIsTgConnect = (data: boolean) => {
    setIsTgConnect(data);
  };

  useEffect(() => {
    const getChats = async () => {
      try {
        setIsLoading(true);

        const response = await chatsService.getAll();

        setChats(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.detail;

          toasts.errorToast(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    isTgConnect && getChats();
  }, [isTgConnect]);

  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <PageTitle title={PageTitles.chats} />
          {chats ? (
            <>
              <Outlet />
              <Chats chats={chats} isLoading={isLoading} />
            </>
          ) : (
            <TelegramAuthForm updIsTgConnect={updIsTgConnect} />
          )}
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default ChatsPage;
