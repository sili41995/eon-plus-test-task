import { Messages } from '@/types/chats.types';

export interface IProps {
  messages: Messages;
}

export interface IStyledListItemProps {
  isCurrentUser: boolean;
}

export interface IStyledContainerProps {
  isCurrentUser: boolean;
}
