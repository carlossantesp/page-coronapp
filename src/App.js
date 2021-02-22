import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
