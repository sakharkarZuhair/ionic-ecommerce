import "../Styles/Successful.css";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IonPage, IonRow, IonCol, IonGrid } from "@ionic/react";

const SuccessfulScreen = () => {
  return (
    <IonPage className="bigContainer">
      <IonGrid className="container">
        <IonRow>
          <IonCol>
            <AiOutlineCheckCircle className="successIcon" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="desc">
            <h3>Successful!</h3>
            <h4>
              You have successfully registered in our app and start working on
              it.
            </h4>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="buttonContainer">
            <div className="button">
              <span className="buttonDesign">Start Shopping</span>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default SuccessfulScreen;
