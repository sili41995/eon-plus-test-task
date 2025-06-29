import { FC } from 'react';
import { IProps } from './PageContent.types';
import { Container } from './PageContent.styled';

const PageContent: FC<IProps> = ({ children, contentRef }) => {
  return <Container ref={contentRef}>{children}</Container>;
};

export default PageContent;
