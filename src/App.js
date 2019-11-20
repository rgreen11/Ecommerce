import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Home from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase';
import setCurrentUser from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {


  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }


  componentWillUnmount() {
    this.unsubcribeFromAuth()
  }

  render() {

    return (
      <div className="App">
        <Home />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
              <SignInAndSignUpPage />
            )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser

})

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps
)(App);
