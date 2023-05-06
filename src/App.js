import { BrowserRouter } from 'react-router-dom';
import './App.css';

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

export default App;
