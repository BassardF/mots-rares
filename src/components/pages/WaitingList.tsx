import * as React from "react";
import { Formik } from "formik";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Spacer from "../styleguide/Spacer";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

interface Values {
  email: string;
}

interface Props {}

const WaitingList = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Rejoignez la liste d'attente
      </Typography>
      <Spacer spacing={2} />
      <Typography align="justify" variant="body1" gutterBottom>
        Nous vous tiendrons au courrant des que les application <br /> mobiles
        paraîtrons.
      </Typography>
      <Formik
        initialValues={{ email: "" }}
        validate={(values: Values) => {
          const errors: { email?: string; password?: string } = {};
          if (!values.email || !values.email.length) {
            errors.email = "Email requis";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email invalide";
          }
          return errors;
        }}
        onSubmit={({ email }: Values) => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }: any) => (
          <form onSubmit={handleSubmit}>
            <Spacer spacing={5} />
            <TextField
              id="email"
              label="Email"
              type="email"
              name="email"
              size="small"
              variant="outlined"
              required
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="exemple@gmail.com"
              error={errors.email && touched.email}
              helperText={errors.email}
            />
            <Spacer spacing={2} />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.beta}
                  onChange={handleChange}
                  name="beta"
                  color="primary"
                />
              }
              label="Je souhaite faire partie de la beta"
            />
            <Spacer spacing={4} />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting || !isValid || !values.email}
              fullWidth
            >
              Soumettre
            </Button>
            <Spacer spacing={3} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default WaitingList;
