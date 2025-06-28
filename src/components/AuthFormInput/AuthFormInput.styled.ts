import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing(4)}px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
