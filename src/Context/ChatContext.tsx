import { createContext, useContext, type KeyboardEvent } from 'react';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

type ChatContextType = {
  userInputMessage: string;
  setUserInputMessage: (value: string) => void;
  conversationHistory: ChatMessage[];
  isGeneratingResponse: boolean;
  hasGenerationError: boolean;
  handleSendMessageToAi: () => void;
  handleKeyPressInTextarea: (event: KeyboardEvent) => void;
};

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider');
  }

  return context;
};

export type { ChatMessage };
