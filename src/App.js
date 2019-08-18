import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Home from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
