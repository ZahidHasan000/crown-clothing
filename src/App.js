import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';


// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />

        {/* <Route path='/hats' component={HatsPage} /> */}
      </Switch>
    </div>

    //     // <div>
    //     //  <HomePage />
    //     // </div>
  );
}


export default App;
