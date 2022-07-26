import "../Styles/Landing.css";
import React from "react";
import { IonPage, IonImg } from "@ionic/react";

const LandingScreen = () => {
  return (
    <IonPage className="landingPage">
      <IonImg className="backgroundImage" src="landingTwo.jpg" alt="" />
    </IonPage>
  );
};

export default LandingScreen;
