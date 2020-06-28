import * as React from "react";
import styled from "styled-components";

import * as firebase from "firebase/app";
import "firebase/auth";

import Main from "./components/pages/Main";
import Container from "./components/styleguide/Container";
import Navbar from "./components/commons/Navbar";
import { WHITE } from "./constants/colors";

import { RegisterContext } from "./contexts/register.js";

const StyledApp = styled.div`
  background-color: ${WHITE};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-family: robotoregular;
`;

const firebaseConfig = {
  apiKey: "AIzaSyAGrs7JPoW5NRSj2gOnsImakuf21EIL-m8",
  authDomain: "mots-rares.firebaseapp.com",
  databaseURL: "https://mots-rares.firebaseio.com",
  projectId: "mots-rares",
  storageBucket: "mots-rares.appspot.com",
  messagingSenderId: "788609692413",
  appId: "1:788609692413:web:956dcbe425c79b1f300494",
  measurementId: "G-25C2F6ZMKN",
};

const App = () => {
  React.useEffect(() => {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user", user);
      } else {
        // User is signed out.
        // ...
      }
    });
  }, []);

  const [isRegister, setIsRegister] = React.useState(false);
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);
  return (
    <RegisterContext.Provider
      value={{
        isRegister,
        setIsRegister,
        showRegisterModal,
        setShowRegisterModal,
      }}
    >
      <StyledApp>
        <Container>
          <Navbar />
          <Main />
        </Container>
      </StyledApp>
    </RegisterContext.Provider>
  );
};

export default App;
