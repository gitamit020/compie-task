import styled from 'styled-components';
import type { JSX } from 'react';

export const TypingMessage = (): JSX.Element => {
  return (
    <MessageWrapper>
      <MessageBubble>
        <TypingIndicator>
          <TypingDot />
          <TypingDot />
          <TypingDot />
        </TypingIndicator>
      </MessageBubble>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div.attrs({ className: 'typing-message-wrapper' })`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4px;
  width: 100%;
`;

const MessageBubble = styled.div.attrs({ className: 'typing-message-bubble' })`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 70%;
    padding: 14px 18px;
    border-radius: 8px;
  }
`;

const TypingIndicator = styled.div.attrs({ className: 'typing-indicator' })`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 4px 0;
`;

const TypingDot = styled.div.attrs({ className: 'typing-dot' })`
  width: 6px;
  height: 6px;
  border-radius: 8px;
  background-color: #8e8ea0;
  animation: typingPulse 1.4s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    animation-delay: 0s;
  }

  @keyframes typingPulse {
    0%,
    80%,
    100% {
      opacity: 0.3;
    }
    40% {
      opacity: 1;
    }
  }
`;
