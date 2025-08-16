import styled from 'styled-components';
import type { JSX } from 'react';
import { formatTimestampForDisplay } from 'utils';
import type { ChatMessage } from 'Context/ChatContext';
import { TagParser } from 'Components/TagParser';

type MessageProps = {
  message: ChatMessage;
};

export const Message = ({ message }: MessageProps): JSX.Element => {
  return (
    <MessageWrapper isUser={message.role === 'user'}>
      <MessageBubble isUser={message.role === 'user'}>
        <MessageContent>
          <TagParser content={message.content} />
        </MessageContent>
        <MessageTimestamp isUser={message.role === 'user'}>
          {formatTimestampForDisplay(message.timestamp)}
        </MessageTimestamp>
      </MessageBubble>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div.attrs({ className: 'message-wrapper' })<{ isUser: boolean }>`
  display: flex;
  justify-content: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  margin-bottom: 4px;
  width: 100%;
`;

const MessageBubble = styled.div.attrs({ className: 'message-bubble' })<{ isUser: boolean }>`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${props => (props.isUser ? props.theme.colors.background.tertiary : '#1a1a1a')};
  border: 1px solid ${props => (props.isUser ? '#3e3e3e' : '#2a2a2a')};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 70%;
    padding: 14px 18px;
    border-radius: 8px;
  }
`;

const MessageContent = styled.div.attrs({ className: 'message-content' })`
  font-size: ${({ theme }) => theme.typography.sizes.p2};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.palette.secondary};
  word-wrap: break-word;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.typography.sizes.p1};
    line-height: 1.6;
  }
`;

const MessageTimestamp = styled.div.attrs({ className: 'message-timestamp' })<{ isUser: boolean }>`
  font-size: ${({ theme }) => theme.typography.sizes.p3};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: #8e8ea0;
  margin-top: 4px;
  text-align: ${props => (props.isUser ? 'right' : 'left')};
  opacity: 0.7;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.typography.sizes.p3};
    margin-top: 6px;
  }
`;
