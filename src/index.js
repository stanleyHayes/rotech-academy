import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Quicksand'
    },
    shape: {
        borderRadius: 16
    },
    palette: {
        primary: {
            main: "#000000"
        }
    }
});


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
