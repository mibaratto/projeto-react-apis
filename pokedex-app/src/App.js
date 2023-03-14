
import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./Routes/router";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./Styles/theme";

function App() {

  return (
    <div>
      <GlobalStyle/>
      <ChakraProvider theme={theme}>
        <Router />
    </ChakraProvider>
    </div>
  );
}

export default App;
