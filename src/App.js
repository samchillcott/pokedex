import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import Pages from './pages/Pages';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          {/* <GiKnifeFork /> */}
          <Logo to={ "/" }>Pokedex</Logo>
        </Nav>
        <Search />
        <Pages />
      </BrowserRouter>
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
