// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
// import store
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      {/* <ThemeProvider> */}
      < CssBaseline />
      <App />
      {/* </ThemeProvider> */}
    </Provider>
    {/* </React.StrictMode> */}
  </>
);

