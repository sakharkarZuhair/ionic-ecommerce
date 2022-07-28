import React from "react";
import "../Styles/HomeTab.css";
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  RiHome2Fill,
  RiShoppingCart2Fill,
  RiHeart3Fill,
  RiUserFill,
} from "react-icons/ri";

const HomeTab = () => {
  return (
    <IonPage>
      <IonGrid className="container">
        <IonRow className="secondContainer">
          <IonCol className="homeTab">
            <RiHome2Fill className="iconHome" /> <h4>Home</h4>
          </IonCol>
          <IonCol className="cartTab">
            <RiShoppingCart2Fill />
          </IonCol>
          <IonCol className="likeTab">
            <RiHeart3Fill />
          </IonCol>
          <IonCol className="profileTab">
            <RiUserFill />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default HomeTab;
