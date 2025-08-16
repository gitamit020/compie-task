import { openAIClient } from 'API/client';
import { AI_SYSTEM_PROMPT } from 'consts';

export const OpenAiAPI = {
  sendChatRequest: async (userPromptMessage: string) => {
    const requestPayloadForChat = await openAIClient.responses.create({
      model: 'gpt-5',
      input: [
        {
          role: 'system',
          content: AI_SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: userPromptMessage,
        },
      ],
    });

    return requestPayloadForChat;
  },
};
