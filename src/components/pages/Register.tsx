import * as React from "react";
import { Formik } from "formik";
import * as firebase from "firebase/app";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Spacer from "../styleguide/Spacer";

interface Values {
  email: string;
  password: string;
}

interface Props {}

const Register = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {true ? "S'enregistrer" : "Se connecter"}
      </Typography>
      <Spacer spacing={2} />
      <Typography align="justify" variant="body2" gutterBottom>
        {true ? (
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
      </Typography>

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
          if (true) {
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
            <Spacer spacing={5} />
            <TextField
              id="email"
              label="Email"
              type="email"
              name="email"
              size="small"
              required
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="exemple@gmail.com"
            />
            <Spacer spacing={2} />
            <Typography
              align="justify"
              variant="caption"
              color="error"
              gutterBottom
            >
              {errors.email && touched.email && errors.email}
            </Typography>
            <Spacer spacing={3} />
            <TextField
              id="password"
              label="Mot de passe"
              type="password"
              name="password"
              size="small"
              fullWidth
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="___"
            />
            <Spacer spacing={2} />
            <Typography
              align="justify"
              variant="caption"
              color="error"
              gutterBottom
            >
              {errors.password && touched.password && errors.password}
            </Typography>
            <Spacer spacing={7} />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
            >
              {true ? "S'enregistrer" : "Se connecter"}
            </Button>

            <Spacer spacing={3} />
            <Typography align="center" variant="body2">
              {true ? "Avez-vous deja un compte?" : "Pas encore de compte?"}
            </Typography>
            <Spacer spacing={3} />
            <Button
              color="primary"
              variant="outlined"
              fullWidth
              onClick={() => {
                // setIsRegister(!isRegister);
              }}
            >
              {!true ? "S'enregistrer" : "Se connecter"}
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Register;
