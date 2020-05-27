import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';

import Login from './views/LogIn';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
