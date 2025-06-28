import { FC } from 'react';
import { IProps } from './PageTitle.types';
import { Title } from './PageTitle.styled';

const PageTitle: FC<IProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageTitle;
