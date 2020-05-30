import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/LogIn';
import SignUp from './views/SignUp';
import Feed from './views/Feed';

function App() {
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/feed" component={Feed} />
            <Route path="/" component={Login} />
          </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
