import "./Styles/App.css";
import React from "react";
import { IonApp } from "@ionic/react";
// import LandingScreen from "./Screens/LandingScreen";
// import LoginScreen from "./Screens/LoginScreen";
// import SignupScreen from "./Screens/SignupScreen";
import SuccessfulScreen from "./Screens/SuccessfulScreen";

const App = () => {
  return (
    <IonApp>
      {/* <LandingScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      <SuccessfulScreen />
    </IonApp>
  );
};

export default App;
