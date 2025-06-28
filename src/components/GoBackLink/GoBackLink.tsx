import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PagePaths, Titles } from '@/constants';
import { ILocation } from '@/types/general.types';
import { IProps } from './GoBackLink.types';

const GoBackLink: FC<IProps> = ({ title = Titles.goBack }) => {
  const { state }: ILocation = useLocation();
  const goBackPath = state?.from ? state.from : PagePaths.chats;

  return <Link to={goBackPath}>{title}</Link>;
};

export default GoBackLink;
