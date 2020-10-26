import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header   from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {Switch, Route } from 'react-router-dom';
import {auth} from  './firebase/firebase.utils';

import './App.css';


class  App extends React.Component  {
  constructor (){
  super()
   this.state={
     currentUser:null
   }

  }
  unsubscribeFronAuth= null;

  componentDidMount(){
    this.unsubscribeFronAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      
    })
  }
  componentWillUnmount(){
    this.unsubscribeFronAuth();
  }

render (){
  return (
    <div >
      <Header currentUser={ this.state.currentUser}></Header>
      <Switch>
        <Route   exact  path="/" component={Homepage}/>
        <Route  exact path="/shop" component={ShopPage} />
        <Route  exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );

}

  
}

export default App;
