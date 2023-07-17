// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import store
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <ThemeProvider> */}
        < CssBaseline />
        <App />
        {/* </ThemeProvider> */}
      </LocalizationProvider>
    </Provider>
    {/* </React.StrictMode> */}
  </>
);

