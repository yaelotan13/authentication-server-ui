import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/LogIn';

function App() {
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
