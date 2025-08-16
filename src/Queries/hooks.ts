/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMutation } from '@tanstack/react-query';
import { OpenAiAPI } from 'API/methods';

export const useTextResponseMutation = () => {
  return useMutation({
    mutationFn: (userInputMessage: string) => OpenAiAPI.sendChatRequest(userInputMessage),
    onError: errorFromAiService => {
      console.error('Failed to get AI response:', errorFromAiService);
    },
  });
};
