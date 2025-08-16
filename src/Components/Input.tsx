import styled from 'styled-components';
import type { ChangeEvent, JSX } from 'react';
import { useRef } from 'react';
import { Button } from './Button';
import { useChatContext } from 'Context/ChatContext';

export const Input = (): JSX.Element => {
  const { userInputMessage, setUserInputMessage, handleKeyPressInTextarea, isGeneratingResponse } =
    useChatContext();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = textareaRef.current;
    setUserInputMessage(event.target.value);

    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
    }
  };

  return (
    <InputContainer>
      <InputWrapper>
        <MessageTextarea
          ref={textareaRef}
          value={userInputMessage}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyPressInTextarea}
          placeholder='Message AI...'
          disabled={isGeneratingResponse}
          rows={1}
        />
        <Button />
      </InputWrapper>
    </InputContainer>
  );
};

const InputContainer = styled.div.attrs({ className: 'input-container' })`
  padding: 16px;
  border-top: 1px solid #3e3e3e;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 20px 32px;
  }
`;

const InputWrapper = styled.div.attrs({ className: 'input-wrapper' })`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  max-width: 100%;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    gap: 12px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const MessageTextarea = styled.textarea.attrs({ className: 'message-text-area' })`
  flex: 1;
  min-height: 44px;
  max-height: 100px;
  padding: 12px 16px;
  border: 1px solid #3e3e3e;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.palette.secondary};
  font-size: ${({ theme }) => theme.typography.sizes.p2};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  resize: none;
  outline: none;
  line-height: 24px;

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    color: #8e8ea0;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.palette.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 14px 18px;
    font-size: ${({ theme }) => theme.typography.sizes.p1};
    border-radius: 8px;
    min-height: 48px;
  }
`;
