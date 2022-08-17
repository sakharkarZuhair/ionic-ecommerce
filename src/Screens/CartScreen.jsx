import "../Styles/Cart.css";
import React from "react";
import { IonPage, IonGrid, IonRow, IonCol, IonCard } from "@ionic/react";

const CartScreen = () => {
  return (
    <IonPage>
      <IonGrid>
        <IonRow>
          <IonCol>
            <h2 className="firstHeading">My Cart</h2>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="productDetailContainer">
              <div className="imageConatiner">
                <img src="bagOne.jpg" alt="" />
              </div>
              <div className="headingConatiner">
                <div className="headingDesc">
                  <h3>Heading</h3>
                  <h4>Desc</h4>
                </div>
                <div className="priceText">
                  <p>Price</p>
                </div>
              </div>
            </div>
            <hr />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="totalContainer">
              <div className="subtotalConatiner">
                <h4>Subtotal: </h4>
                <p>Price</p>
              </div>
              <hr />
              <div className="shippingContainer">
                <h4>Shipping: </h4>
                <p>Price</p>
              </div>
              <hr />
              <div className="bagTotalContainer">
                <h4>BagTotal: </h4>
                <p>Price</p>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="proceedToCheckoutButton">Proceed to Checkout</div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default CartScreen;
