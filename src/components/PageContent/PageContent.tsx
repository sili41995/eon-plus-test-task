import { FC } from 'react';
import { IProps } from './PageContent.types';
import { Container } from './PageContent.styled';

const PageContent: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContent;
