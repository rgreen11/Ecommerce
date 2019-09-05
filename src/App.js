import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Home from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase';


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    currentUser: null
  };
}

unsubcribeFromAuth = null;

componentDidMount(){
   this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot =>{
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          } 
        });
      })
     } else {
       this.setState({currentUser: userAuth})
     }
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
