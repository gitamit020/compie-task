import type { JSX } from 'react';
import { Outlet } from '@tanstack/react-router';
import NavigationBar from 'Components/NavigationBar';
import styled from 'styled-components';

function App(): JSX.Element {
  return (
    <MainContainer>
      <NavigationBar />
      <Outlet />
    </MainContainer>
  );
}

const MainContainer = styled.main.attrs({ className: 'main-container' })`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
