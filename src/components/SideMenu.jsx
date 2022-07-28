import React, { useState } from "react";
import "../Styles/SideMenu.css";
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoShirt, IoBagOutline } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";

const SideMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <IonPage>
      <IonGrid>
        <IonRow>
          <IonCol
            onClick={() => {
              setShow(!show);
            }}
          >
            Hello
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid
        className="sideMenu"
        style={{ display: `${show ? "none" : "block"}` }}
      >
        <div className="topBar">
          <h1>Categories</h1>
          <h2
            onClick={() => {
              setShow(!show);
            }}
          >
            Close
          </h2>
        </div>
        <div className="categoryContainer">
          <div className="categoryOption">
            <div className="categoryOne">
              <div className="categoryName">
                <FaCartArrowDown className="icon" />
                <h2>New Arrivals</h2>
              </div>
              <div className="categoryProducts">
                <span>268</span> Products
              </div>
            </div>
          </div>
          <div className="categoryOption">
            <div className="categoryOne">
              <div className="categoryName">
                <IoShirt className="icon" />
                <h2>Clothes</h2>
              </div>
              <div className="categoryProducts">
                <span>500</span> Products
              </div>
            </div>
          </div>
          <div className="categoryOption">
            <div className="categoryOne">
              <div className="categoryName">
                <IoBagOutline className="icon" />
                <h2>Bags</h2>
              </div>
              <div className="categoryProducts">
                <span>150</span> Products
              </div>
            </div>
          </div>
          <div className="categoryOption">
            <div className="categoryOne">
              <div className="categoryName">
                <GiRunningShoe className="icon" />
                <h2>Shoes</h2>
              </div>
              <div className="categoryProducts">
                <span>256</span> Products
              </div>
            </div>
          </div>
          <div className="categoryOption">
            <div className="categoryOne">
              <div className="categoryName">
                <MdElectricalServices className="icon" />
                <h2>Electronics</h2>
              </div>
              <div className="categoryProducts">
                <span>28</span> Products
              </div>
            </div>
          </div>
        </div>
      </IonGrid>
    </IonPage>
  );
};

export default SideMenu;
