
import { Header } from "./Components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./Routes/router";

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
