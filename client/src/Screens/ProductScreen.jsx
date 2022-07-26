import React from "react";
import "../Styles/Product.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";

const ProductScreen = () => {
  return (
    <IonPage>
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="imageContainer">
              <img src="bagOne.jpg" alt="" />
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="containerOne">
              <div className="detail">
                <h2>Bag</h2>
                <h3>H&M</h3>
                <div className="rating">
                  Rating<span>(320 Reviews)</span>
                </div>
              </div>
              <div className="qtyContainer">
                <div className="qty">
                  <span className="plusMinus">
                    <AiOutlineMinus />
                  </span>
                  <span className="qtyNo">1</span>
                  <span className="plusMinus">
                    <AiOutlinePlus />
                  </span>
                </div>
                <div className="stock">
                  <h4>Available in Stock</h4>
                </div>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="containerTwo">
              <div className="sizeContainer">
                <h5>Size</h5>
                <div className="sizeDesc">
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                </div>
              </div>
              <div className="colorContainer">
                <p className="color"></p>
                <p className="color"></p>
                <p className="color"></p>
                <p className="color"></p>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="descContainer">
            <h6 className="descHeading">Description</h6>
            <p className="descPara">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur inventore voluptate ad quo sapiente quae fugit dolores
              excepturi unde odit ut vitae, pariatur fuga iste?
            </p>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="bottomContainer">
              <div className="priceContainer">
                <h2>Total Price</h2>
                <p>$198.00</p>
              </div>
              <div className="addToCartButton">
                <span>
                  <BsHandbag className="cartIcon" />
                </span>
                <span className="addToCartText">Add to Cart</span>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default ProductScreen;
