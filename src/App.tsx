import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/auth";

import Main from "./components/pages/Main";
import Aleatoire from "./components/pages/Aleatoire";
import Dictionnaire from "./components/pages/Dictionnaire";
import Favoris from "./components/pages/Favoris";

import Container from "./components/styleguide/Container";
import Navbar from "./components/commons/Navbar";
import { WHITE } from "./constants/colors";

import { WaitingListContext } from "./contexts/waitingList";
import { UserContext } from "./contexts/user";

import history from "./utils/history";

import User from "./models/User";

const StyledApp = styled.div`
  background-color: ${WHITE};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
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
  const [user, setUser] = React.useState<User>();
  const [showWaitingListModal, setShowWaitingListModal] = React.useState(false);

  React.useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      setUser(
        user
          ? {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
            }
          : undefined
      );
    });
  }, []);

  React.useEffect(() => {
    history.push(!!user ? "/aleatoire" : "/");
  }, [user]);

  return (
    <Router>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <WaitingListContext.Provider
          value={{
            showWaitingListModal,
            setShowWaitingListModal,
          }}
        >
          <StyledApp>
            <Container>
              <Navbar />
              <Switch>
                <Route path="/aleatoire">
                  <Aleatoire />
                </Route>
                <Route path="/dictionnaire">
                  <Dictionnaire />
                </Route>
                <Route path="/favoris">
                  <Favoris />
                </Route>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
            </Container>
          </StyledApp>
        </WaitingListContext.Provider>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
