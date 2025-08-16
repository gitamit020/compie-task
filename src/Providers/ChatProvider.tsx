import { ChatContext, type ChatMessage } from 'Context/ChatContext';
import { useTextResponseMutation } from 'Queries/hooks';
import { useEffect, useState, type JSX, type KeyboardEvent } from 'react';
import { v4 as uuid } from 'uuid';

export const ChatContextProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [userInputMessage, setUserInputMessage] = useState<string>('');
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);

  const {
    mutate: generateResponseFromAi,
    data: aiResponseData,
    isPending: isGeneratingResponse,
    isError: hasGenerationError,
  } = useTextResponseMutation();

  const handleSendMessageToAi = (): void => {
    if (!userInputMessage.trim()) return;

    const newUserMessage: ChatMessage = {
      id: uuid(),
      role: 'user',
      content: userInputMessage,
      timestamp: new Date(),
    };

    setConversationHistory(previousMessages => [...previousMessages, newUserMessage]);
    generateResponseFromAi(userInputMessage);
    setUserInputMessage('');
  };

  const handleKeyPressInTextarea = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessageToAi();
    }
  };

  useEffect(() => {
    if (aiResponseData) {
      const newAiMessage: ChatMessage = {
        id: uuid(),
        role: 'assistant',
        content: aiResponseData.output_text || 'No response generated',
        timestamp: aiResponseData.created_at
          ? new Date(aiResponseData.created_at * 1000)
          : new Date(),
      };
      setConversationHistory(previousMessages => [...previousMessages, newAiMessage]);
    }
  }, [aiResponseData]);

  return (
    <ChatContext.Provider
      value={{
        userInputMessage,
        setUserInputMessage,
        conversationHistory,
        isGeneratingResponse,
        hasGenerationError,
        handleSendMessageToAi,
        handleKeyPressInTextarea,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
