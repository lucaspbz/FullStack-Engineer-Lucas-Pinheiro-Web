import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';

import MainPage from './pages/MainPage';
import EditQuestion from './pages/EditQuestion';

export default function routes() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/edit" component={EditQuestion} />
      </Switch>
    </BrowserRouter>
  );
}
