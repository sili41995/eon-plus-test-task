import { INavLinks } from '@/types/general.types';
import PagePaths from './pagePaths';
import PageTitles from './pageTitles';

const navLinks: INavLinks = {
  privateNavLinks: [
    {
      title: PageTitles.chats,
      href: PagePaths.chats,
    },
  ],
  authNavLinks: [
    {
      title: PageTitles.signIn,
      href: PagePaths.signIn,
    },
    {
      title: PageTitles.signUp,
      href: PagePaths.signUp,
    },
  ],
};

export default navLinks;
