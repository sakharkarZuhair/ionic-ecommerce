import "../Styles/Login.css";
import React from "react";
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import { BsGoogle, BsFacebook } from "react-icons/bs";

const SignupScreen = () => {
  return (
    <IonPage className="container">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <IonGrid>
        <IonRow>
          <IonCol className="heading">
            <h3>Sign Up</h3>
            <p>Create a new account</p>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <form className="formDesign">
              <div className="inputContainer">
                <label className="labelDesign" for="fname">
                  Name
                </label>
                <input
                  className="inputDesign"
                  placeholder="Your Name"
                  type="text"
                  id="fname"
                  name="fname"
                />
              </div>
              <div className="inputContainer">
                <label className="labelDesign" for="fname">
                  Email
                </label>
                <input
                  className="inputDesign"
                  placeholder="Email Address"
                  type="email"
                  id="fname"
                  name="fname"
                />
              </div>
              <div className="inputContainer">
                <label className="labelDesign" for="fname">
                  Password
                </label>
                <input
                  className="inputDesign"
                  placeholder="************"
                  type="password"
                  id="fname"
                  name="fname"
                />
              </div>
              <div className="inputContainer">
                <label className="labelDesign" for="fname">
                  Confirm Password
                </label>
                <input
                  className="inputDesign"
                  placeholder="************"
                  type="password"
                  id="fname"
                  name="fname"
                />
              </div>
              <div className="loginButton">
                <span className="loginButtonStyle">Login</span>
              </div>
            </form>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default SignupScreen;
