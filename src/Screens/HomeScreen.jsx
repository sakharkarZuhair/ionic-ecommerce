import React from "react";
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import { HiOutlineMenuAlt2, HiSearch } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "../Styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <IonPage>
      <IonGrid>
        <IonRow className="firstContainer">
          <IonCol className="colOne">
            <HiOutlineMenuAlt2 className="menuIcon" />
          </IonCol>
          <IonCol className="colTwo">
            <div className="searchBox">
              <input
                className="searchText"
                type="text"
                placeholder="Type to search"
              />
              <FiSearch className="searchButton" />
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      {/* <div className="container">
        <div>
          <HiOutlineMenuAlt2 />
        </div>
        <h4>
          <HiSearch />
        </h4>
      </div> */}
    </IonPage>
  );
};

export default HomeScreen;
