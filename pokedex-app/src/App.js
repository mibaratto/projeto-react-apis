import { Header } from "./Components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";
import { PokemonListPage } from "./Pages/PokemonListPage/PokemonListPage";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header />
      <PokemonListPage />
    </div>
  );
}

export default App;
