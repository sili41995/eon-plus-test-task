import { FC } from 'react';
import GeneralContainer from '@/components/GeneralContainer';
import GoBackLink from '@/components/GoBackLink';
import PageContent from '@/components/PageContent';
import Section from '@/components/Section';
import Chat from '@/components/Chat';
import Loader from '@/components/Loader';

const ChatDetailsPage: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <PageContent>
          <GoBackLink />
          {chat && <Chat chat={chat} />}
          {isLoading && <Loader />}
        </PageContent>
      </GeneralContainer>
    </Section>
  );
};

export default ChatDetailsPage;
