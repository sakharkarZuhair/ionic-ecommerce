import "./Styles/App.css";
import React from "react";
import { IonApp } from "@ionic/react";
import { Switch, Route } from "react-router-dom";
// import LandingScreen from "./Screens/LandingScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import SuccessfulScreen from "./Screens/SuccessfulScreen";
import HomeScreen from "./Screens/HomeScreen";
import HomeTab from "./components/HomeTab";
import ProductsScreen from "./Screens/ProductsScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
// import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <IonApp>
      <Switch>
        {/* <LandingScreen /> */}
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/successful" component={SuccessfulScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/product" component={ProductScreen} />
        <Route path="/cart" component={CartScreen} />
      </Switch>
      <HomeTab />
    </IonApp>
  );
};

export default App;
