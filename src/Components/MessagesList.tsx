import styled from 'styled-components';
import type { JSX } from 'react';
import { Message } from './Message';
import { useChatContext } from 'Context/ChatContext';
import { ErrorMessage } from 'Components/ErrorMessage';
import { TypingMessage } from 'Components/TypingMessage';

export const MessagesList = (): JSX.Element => {
  const { conversationHistory, isGeneratingResponse, hasGenerationError } = useChatContext();

  return (
    <MessagesContainer>
      {conversationHistory.length === 0 ? (
        <WelcomeMessage>
          <WelcomeTitle>How can I help you today?</WelcomeTitle>
          <WelcomeSubtitle>Start a conversation with AI</WelcomeSubtitle>
        </WelcomeMessage>
      ) : (
        conversationHistory.map(message => <Message key={message.id} message={message} />)
      )}

      {isGeneratingResponse && <TypingMessage />}
      {hasGenerationError && <ErrorMessage />}
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div.attrs({ className: 'messages-container' })`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 100%;
  max-width: 100%;
  flex: 1;
  overflow-y: auto;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 1200px;
    gap: 20px;
    margin: 0 auto;
    padding: 24px 32px;
  }
`;

const WelcomeMessage = styled.div.attrs({ className: 'welcome-message' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: 24px;
  min-height: 60vh;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 48px;
    min-height: 70vh;
  }
`;

const WelcomeTitle = styled.h2.attrs({ className: 'welcome-title' })`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.typography.sizes.h3};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.palette.secondary};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.typography.sizes.h1};
    margin-bottom: 12px;
  }
`;

const WelcomeSubtitle = styled.p.attrs({ className: 'welcome-subtitle' })`
  font-size: ${({ theme }) => theme.typography.sizes.p1};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: #8e8ea0;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.typography.sizes.p1};
  }
`;
