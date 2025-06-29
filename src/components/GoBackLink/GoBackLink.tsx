import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { PagePaths, Titles } from '@/constants';
import { ILocation } from '@/types/general.types';
import { IProps } from './GoBackLink.types';
import { StyledLink } from './GoBackLink.styled';

const GoBackLink: FC<IProps> = ({ title = Titles.goBack }) => {
  const { state }: ILocation = useLocation();
  const goBackPath = state?.from ? state.from : PagePaths.chats;

  return <StyledLink to={goBackPath}>{title}</StyledLink>;
};

export default GoBackLink;
