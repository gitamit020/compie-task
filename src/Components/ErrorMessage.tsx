import styled from 'styled-components';
import type { JSX } from 'react';

export const ErrorMessage = (): JSX.Element => {
  return (
    <ErrorMessageContainer>Failed to get AI response. Please try again.</ErrorMessageContainer>
  );
};

const ErrorMessageContainer = styled.div.attrs({ className: 'error-message' })`
  padding: 12px 16px;
  background-color: #3e1a1a;
  border: 1px solid #5a2d2d;
  border-radius: 8px;
  color: #ff6b6b;
  font-size: ${({ theme }) => theme.typography.sizes.p2};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 14px 18px;
    font-size: ${({ theme }) => theme.typography.sizes.p1};
  }
`;
