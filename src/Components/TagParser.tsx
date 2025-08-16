import type { JSX } from 'react';
import styled from 'styled-components';

type TagParserProps = {
  content: string;
};

export const TagParser = ({ content }: TagParserProps): JSX.Element => {
  const parseContentWithTags = (text: string): (JSX.Element | string)[] => {
    const parts: (JSX.Element | string)[] = [];
    const tagRegex = /\[(quiz|link|image|video)\s+([^\]]+)\]/g;

    let lastIndex = 0;
    let match;

    while ((match = tagRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      let attrMatch;

      const tagType = match[1];
      const attributes = match[2];

      const attrs: Record<string, string> = {};
      const attrRegex = /(\w+)="([^"]+)"/g;

      while ((attrMatch = attrRegex.exec(attributes)) !== null) {
        attrs[attrMatch[1]] = attrMatch[2];
      }

      switch (tagType) {
        case 'quiz':
          const options = attrs.options?.split('|') || [];
          parts.push(
            <QuizContainer key={match.index}>
              <QuizQuestion>{attrs.question}</QuizQuestion>
              {options.map((option, index) => (
                <QuizOption key={index} isCorrect={option === attrs.answer}>
                  {String.fromCharCode(65 + index)}) {option}
                </QuizOption>
              ))}
            </QuizContainer>,
          );
          break;

        case 'link':
          parts.push(
            <LinkContainer key={match.index}>
              <StyledLink href={attrs.href} target='_blank' rel='noopener noreferrer'>
                {attrs.title}
              </StyledLink>
            </LinkContainer>,
          );
          break;

        case 'image':
          parts.push(
            <ImageContainer key={match.index}>
              <StyledImage src={attrs.src} alt={attrs.alt} />
            </ImageContainer>,
          );
          break;

        case 'video':
          parts.push(
            <VideoContainer key={match.index}>
              <StyledVideoLink href={attrs.src} target='_blank' rel='noopener noreferrer'>
                {attrs.title}
              </StyledVideoLink>
            </VideoContainer>,
          );
          break;
      }

      lastIndex = tagRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return <div>{parseContentWithTags(content)}</div>;
};

const QuizContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  padding: 12px;
  border-radius: 8px;
  margin: 8px 0;
  border: 1px solid #3e3e3e;
`;

const QuizQuestion = styled.p`
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.palette.secondary};
`;

const QuizOption = styled.div<{ isCorrect: boolean }>`
  margin: 4px 0;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${props => (props.isCorrect ? props.theme.colors.palette.primary : '#8e8ea0')};
  background-color: ${props => (props.isCorrect ? 'rgba(74, 145, 255, 0.1)' : 'transparent')};
  font-size: ${({ theme }) => theme.typography.sizes.p2};
`;

const LinkContainer = styled.div`
  margin: 8px 0;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.palette.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};

  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  margin: 8px 0;
`;

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  height: auto;
`;

const VideoContainer = styled.div`
  margin: 8px 0;
`;

const StyledVideoLink = styled.a`
  color: ${({ theme }) => theme.colors.palette.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};

  &:hover {
    text-decoration: underline;
  }
`;
