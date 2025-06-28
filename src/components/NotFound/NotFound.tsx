import { FC } from 'react';
import { Messages, PageTitles } from '@/constants';

const NotFound: FC = () => (
  <div>
    <h1>{PageTitles.notFound}</h1>
    <p>{Messages.notFound}</p>
  </div>
);

export default NotFound;
