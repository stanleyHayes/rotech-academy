import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <HomePage />
          </Route>

          <Route exact={true} path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
