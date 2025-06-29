import { theme } from '@/constants';
import { ChatType } from '@/types/chats.types';

const setLabelBgColor = (type: ChatType): string => {
  switch (type) {
    case 'Channel':
      return theme.colors.primary;

    case 'Chat':
      return theme.colors.redLight;

    case 'User':
      return theme.colors.green;

    default:
      return theme.colors.grey;
  }
};

export default setLabelBgColor;
