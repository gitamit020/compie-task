import styled from 'styled-components';
import type { JSX } from 'react';
import { Input } from 'Components/Input';
import { MessagesList } from 'Components/MessagesList';

const ChatPage = (): JSX.Element => {
  return (
    <ChatPageContainer>
      <MessagesList />
      <Input />
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled.div.attrs({ className: 'chat-page-container' })`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.palette.secondary};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
`;

export default ChatPage;
