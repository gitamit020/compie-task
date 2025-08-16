import type { JSX } from 'react';
import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

const NavigationBar = (): JSX.Element => {
  return (
    <NavigationBarContainer>
      <NavigationContent>
        <NavigationBrandSection>
          <BrandTitle>AI Chat</BrandTitle>
        </NavigationBrandSection>

        <NavigationLinksSection>
          <NavigationLink to='/'>
            <LinkText>Chat</LinkText>
          </NavigationLink>
          <NavigationLink to='/gallery'>
            <LinkText>Gallery</LinkText>
          </NavigationLink>
        </NavigationLinksSection>
      </NavigationContent>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

const NavigationBarContainer = styled.nav.attrs({ className: 'navigation-bar-container' })`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-bottom: 1px solid #3e3e3e;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavigationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  max-width: 100%;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 16px 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const NavigationBrandSection = styled.div`
  display: flex;
  align-items: center;
`;

const BrandTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.p1};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.palette.secondary};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.typography.sizes.h3};
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  }
`;

const NavigationLinksSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    gap: 16px;
  }
`;

const LinkText = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.p2};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: #8e8ea0;
  text-transform: capitalize;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.typography.sizes.p1};
  }
`;

const NavigationLink = styled(Link)`
  position: relative;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }

  &[data-status='active'] {
    background-color: ${({ theme }) => theme.colors.palette.primary};

    ${LinkText} {
      color: ${({ theme }) => theme.colors.palette.secondary};
      font-weight: ${({ theme }) => theme.typography.weights.medium};
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 10px 16px;
    border-radius: 12px;
  }
`;
