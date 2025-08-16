import styled from 'styled-components';
import type { JSX } from 'react';
import { useChatContext } from 'Context/ChatContext';

export const Button = (): JSX.Element => {
  const { handleSendMessageToAi, isGeneratingResponse, userInputMessage } = useChatContext();

  return (
    <SendButton
      onClick={handleSendMessageToAi}
      disabled={isGeneratingResponse || !userInputMessage.trim()}
      isActive={userInputMessage.trim().length > 0}
    >
      <SendText>Send</SendText>
    </SendButton>
  );
};

const SendButton = styled.button.attrs({ className: 'send-button' })<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  border: none;
  border-radius: 8px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.palette.primary : props.theme.colors.background.tertiary};
  color: ${props => (props.isActive ? props.theme.colors.palette.secondary : '#8e8ea0')};
  cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};

  &:hover:not(:disabled) {
    background-color: ${props => (props.isActive ? '#3d7ddb' : '#3e3e3e')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 44px;
    height: 44px;
  }
`;

const SendText = styled.p.attrs({ className: 'send-text' })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 18px;
    height: 18px;
  }
`;
