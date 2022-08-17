import "../Styles/Products.css";
import React from "react";
import { IonPage, IonGrid, IonRow, IonCol, IonCard } from "@ionic/react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const ProductScreen = () => {
  return (
    <IonPage>
      <IonGrid>
        <IonRow>
          <IonCol>
            <MdOutlineArrowBackIosNew className="backIcon" />
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol>
            <h1>Bags</h1>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard className="productDetail">
              <div className="productImage">
                <img className="cardImage" src="bagOne.jpg" alt="" />
              </div>
              <h2>bag</h2>
              <h3>H&M</h3>
              <h4>$205.00</h4>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="productDetail">
              <div className="productImage">
                <img className="cardImage" src="bagTwo.jpg" alt="" />
              </div>
              <h2>H&M Jacket</h2>
              <h3>H&M</h3>
              <h4>$205.00</h4>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default ProductScreen;
