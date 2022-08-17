import React, { useState } from "react";
import { IonPage, IonGrid, IonRow, IonCol, IonCard } from "@ionic/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { IoShirt, IoBagOutline } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import "../Styles/HomeScreen.css";
// import  MenuExample  from "../components/Menu";

const HomeScreen = () => {
  const [show, setShow] = useState(false);
  return (
    <IonPage style={{ marginTop: "5vh", marginBottom: "10vh" }}>
      <IonGrid
        className="sideMenu"
        style={{ display: `${show ? "block" : "none"}` }}
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
      <IonGrid>
        <IonRow className="firstContainer">
          <IonCol className="colOne">
            <HiOutlineMenuAlt2
              onClick={() => {
                setShow(!show);
              }}
              className="menuIcon"
            />
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
        <IonRow>
          <IonCol className="welsomeDesign">
            <h4>Welcome,</h4>
            <p>Our Fashion App</p>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid className="offerTab">
        <IonRow>
          <IonCol>
            <IonCard>
              <div className="cardGradient">
                <img className="imgCard" src="bag.jpg" alt="" />
                <div class="text-block">
                  <h4>50% Off</h4>
                  <p>On Everything Today</p>
                  <h5>With Code: KZCreation</h5>
                  <div className="getnowBtn">GET NOW</div>
                </div>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <div className="cardGradient">
                <img className="imgCard" src="shoesOffer.jpg" alt="" />
                <div class="text-block">
                  <h4>50% Off</h4>
                  <p>On Everything Today</p>
                  <h5>With Code: KZCreation</h5>
                  <div className="getnowBtn">GET NOW</div>
                </div>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>
            <h6 className="newArrHead">New Arrivals</h6>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid className="arrivalTab">
        <IonRow>
          <IonCol>
            <IonCard className="productDetail">
              <div className="productImage">
                <img className="cardImage" src="jacket.jpg" alt="" />
              </div>
              <h2>The Marc Jacobs</h2>
              <h3>Zara</h3>
              <h4>$195.00</h4>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard className="productDetail">
              <div className="productImage">
                <img className="cardImage" src="jacketTwo.jpg" alt="" />
              </div>
              <h2>Buffalo Jacket</h2>
              <h3>Buffalo</h3>
              <h4>$105.00</h4>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard className="productDetail">
              <div className="productImage">
                <img className="cardImage" src="jacketThree.jpg" alt="" />
              </div>
              <h2>H&M Jacket</h2>
              <h3>H&M</h3>
              <h4>$205.00</h4>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="viewAll">
              <h2>Popular</h2>
              <h3>View All</h3>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCard className="popularCard">
            <IonCol className="popularImgCont">
              <img className="popularImage" src="heels.jpg" alt="" />
            </IonCol>
            <IonCol className="popularDetail">
              <h3>Gia Borghini</h3>
              <h4>RHW Rosie</h4>
              <h5>
                <span>
                  <AiFillStar />
                </span>
                4.5
              </h5>
            </IonCol>
            <IonCol className="popularPrice">$740.00</IonCol>
          </IonCard>
        </IonRow>
        <IonRow>
          <IonCard className="popularCard">
            <IonCol className="popularImgCont">
              <img className="popularImage" src="headphone.jpg" alt="" />
            </IonCol>
            <IonCol className="popularDetail">
              <h3>Headphone(VS102)</h3>
              <h4>BOATS</h4>
              <h5>
                <span>
                  <AiFillStar />
                </span>
                4.0
              </h5>
            </IonCol>
            <IonCol className="popularPrice">$150.00</IonCol>
          </IonCard>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default HomeScreen;
