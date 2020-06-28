import * as React from "react";
import { Formik } from "formik";
import * as firebase from "firebase/app";

import Flex from "../styleguide/Flex";
import Spacer from "../styleguide/Spacer";
import Button from "../styleguide/Button";
import Header from "../styleguide/Header";
import Text from "../styleguide/Text";
import Input from "../styleguide/Input";
import { GREY, PURPLE } from "../../constants/colors";

import { RegisterContext } from "../../contexts/register.js";

interface Values {
  email: string;
  password: string;
}

interface Props {}

const Register = () => {
  return (
    <RegisterContext.Consumer>
      {({ isRegister, setIsRegister }) => (
        <>
          <Header size="l" bold uppercase>
            {isRegister ? "S'enregistrer" : "Se connecter"}
          </Header>
          <Spacer spacing={2} />
          <Text size="s" color={GREY} align="justify">
            {isRegister ? (
              <>
                Rejoignez nous gratuitement <br />
                et accéder à l'ensemble de notre contenu.
              </>
            ) : (
              <>
                Connectez vous à votre compte.
                <br />
                et accéder à l'ensemble de notre contenu.
              </>
            )}
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values: Values) => {
              const errors: { email?: string; password?: string } = {};
              if (!values.email) {
                errors.email = "Email requis";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Email invalide";
              }
              if (!values.password) {
                errors.password = "Mot de passe requis";
              } else if (values.password.length < 7) {
                errors.password = "Mot de passe trop court";
              }
              return errors;
            }}
            onSubmit={({ email, password }: Values) => {
              if (isRegister) {
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .catch(function (error: { code: string; message: string }) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                  });
              } else {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password)
                  .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                  });
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }: any) => (
              <form onSubmit={handleSubmit}>
                <Spacer spacing={4} />
                <label>
                  <Text size="s" color={GREY} align="left">
                    Email
                  </Text>
                  <Spacer spacing={1} />
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="exemple@gmail.com"
                  />
                </label>
                <Spacer spacing={2} />
                <Text size="s" color={PURPLE}>
                  {errors.email && touched.email && errors.email}
                </Text>
                <Spacer spacing={2} />
                <label>
                  <Text size="s" align="left">
                    Mot de passe
                  </Text>
                  <Spacer spacing={1} />
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="___"
                  />
                </label>
                <Spacer spacing={2} />
                <Text size="s" color={PURPLE}>
                  {errors.password && touched.password && errors.password}
                </Text>
                <Spacer spacing={3} />
                <Button type="submit" disabled={isSubmitting} fullWidth>
                  {isRegister ? "S'enregistrer" : "Se connecter"}
                </Button>
                <Spacer spacing={3} />
                <Text size="s" color={GREY}>
                  {isRegister
                    ? "Avez-vous deja un compte?"
                    : "Pas encore de compte?"}
                </Text>
                <Spacer spacing={3} />
                <Text
                  size="s"
                  color={GREY}
                  onClick={() => {
                    setIsRegister(!isRegister);
                  }}
                  pointer
                  underline
                >
                  {!isRegister ? "S'enregistrer" : "Se connecter"}
                </Text>
              </form>
            )}
          </Formik>
        </>
      )}
    </RegisterContext.Consumer>
  );
};

export default Register;
