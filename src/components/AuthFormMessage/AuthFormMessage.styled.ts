import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
`;
