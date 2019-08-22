import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Home from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './firebase/firebase';


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    currentUser: null
  }
}

unsubcribeFromAuth = null

componentDidMount(){
   this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user})
  })
}


componentWillUnmount(){
  this.unsubcribeFromAuth()
}

  render(){
    return (
      <div className="App">
        <Home currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
    }
  }
  

export default App;
