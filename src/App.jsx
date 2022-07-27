import "./Styles/App.css";
import React from "react";
import { IonApp } from "@ionic/react";
// import LandingScreen from "./Screens/LandingScreen";
// import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";

const App = () => {
  return (
    <IonApp>
      {/* <LandingScreen /> */}
      {/* <LoginScreen /> */}
      <SignupScreen />
    </IonApp>
  );
};

export default App;
