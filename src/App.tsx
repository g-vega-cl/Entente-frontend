import './App.css';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lobby from './components/Lobby/Lobby';
import Auth from './components/Auth/Auth';
import Match from './components/Match/Match';
import 'antd/dist/antd.css';

export const dataContext = React.createContext<any>({});
export const ioContext = React.createContext<any>({});
export function App() {
  const turnData = useRef<any>();
  useEffect(() => {
    turnData.current = {
      event: false,
      allTerritories: [],
    };
  });
  return (
    <dataContext.Provider value={{ turnData: turnData }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Lobby} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/match/:id' exact component={Match} />
        </Switch>
      </BrowserRouter>
    </dataContext.Provider>
  );
}
