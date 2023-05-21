import { BrowserRouter, Link } from 'react-router-dom';

import styled from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Pages from './pages/Pages';
import Search from './components/Search';
import { ReactComponent as PokemonSVG } from './assets/pokemon-23.svg';

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
          <Nav>
            <PokemonSVG style={ { height: '50px', width: '100px' } } />
            <Logo to={ "/" }>Pokedex</Logo>
          </Nav>
          <Search />
          <Pages />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={ false } />
      </QueryClientProvider>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  /* font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive; */
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`

export default App;
