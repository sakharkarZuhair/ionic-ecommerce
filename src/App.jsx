import "./Styles/App.css";
import React from "react";
import { IonApp } from "@ionic/react";
// import LandingScreen from "./Screens/LandingScreen";
import LoginScreen from "./Screens/LoginScreen";

const App = () => {
  return (
    <IonApp>
      {/* <LandingScreen /> */}
      <LoginScreen />
    </IonApp>
  );
};

export default App;
