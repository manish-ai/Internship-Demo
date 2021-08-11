import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import { Provider } from 'react-redux'
import store from './store'
import { withCookies } from 'react-cookie';
import Scroll from './Components/Scroll';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Categories from './Components/Category/Categories';
import ProductDetail from './Components/ProductDetail';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';
import WishlistNew from './Components/Wish';
import Checkout from './Components/Checkout';
import OrderRecieved from './Components/OrderRecieved';
import Myaccount from './Components/MyAccount/Myaccount';

function App() {

  const LoginContainer = () => (
    <div className="">
      <Route exact path="/login" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={SignIn} />
    </div>
  )
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Switch>

            <Route exact path="/" component={LandingPage} />
            <Route path="/(login)" component={LoginContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/wish" component={Wishlist} />
            <Route path="/signup" component={SignUp} />
            <Route path="/categories" component={Categories} />
            <Route path="/productdetail" component={ProductDetail} />
            <Route path="/wishlistnew" component={WishlistNew} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orderRecieved" component={OrderRecieved} />
            <Route path="/profile" component={Myaccount} />

          </Switch>
          <Scroll></Scroll>
        </div>
      </Provider>
    </>
  );
}

export default withCookies(App);
