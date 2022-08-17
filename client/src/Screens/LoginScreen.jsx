import "../Styles/Login.css";
import React from "react";
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/react";
import { BsGoogle, BsFacebook } from "react-icons/bs";

const LoginScreen = () => {
  return (
    <IonPage className="container">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <IonGrid>
        <IonRow>
          <IonCol className="heading">
            <h3>Welcome!</h3>
            <p>please login or sign up to continue our app</p>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <form className="formDesign">
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
              <div className="loginButton">
                <span className="loginButtonStyle">Login</span>
              </div>
            </form>
          </IonCol>
        </IonRow>
        <h4 className="orDesign">or</h4>
        <IonRow>
          <IonCol>
            <div className="facebookButton">
              <span className="facebookIcon">
                <BsFacebook />
              </span>
              <span className="facebookButtonStyle">
                Continue with Facebook
              </span>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="googleButton">
              <span className="googleIcon">
                <BsGoogle />
              </span>
              <span className="googleButtonStyle">Continue with Google</span>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default LoginScreen;
