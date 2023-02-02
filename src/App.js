import React from 'react';
// 
import { Route, Switch } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

// function App() {

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   console.log(user);
    // });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (

      <div>
        {/* <Header /> */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/* <Routes> */}
          {/* <BrowserRouter> */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          {/* </BrowserRouter> */}
          {/* </Routes> */}

          {/* <Route path='/hats' component={HatsPage} /> */}
        </Switch>
      </div>

      //     // <div>
      //     //  <HomePage />
      //     // </div>
    )
  }

}


export default App;
