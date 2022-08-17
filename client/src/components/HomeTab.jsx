import React from "react";
import "../Styles/HomeTab.css";
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  RiHome2Fill,
  RiShoppingCart2Fill,
  RiHeart3Fill,
  RiUserFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const HomeTab = () => {
  return (
    <IonPage>
      <IonGrid className="container">
        <IonRow className="secondContainer">
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            <IonCol className="homeTab">
              <RiHome2Fill className="iconHome" /> <h4>Home</h4>
            </IonCol>
          </Link>
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
