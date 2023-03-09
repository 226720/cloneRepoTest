import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values, props) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username is too short")
      .required("Please enter username"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      )
      .min(8, "Password should contain atleast 8 characters")
      .required("Enter your password")
      .required("Enter your password"),
  });

  const btnStyle = { margin: "8px 0" };
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/dashboard");
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                fullWidth
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                fullWidth
                helperText={<ErrorMessage name="password" />}
              />
              <br></br>
              <br></br>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnStyle}
                fullWidth
                disabled={!props.isValid}
                onClick={navigateHandler}
              >
                LogIn
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          Do you have an account?
          <Link to="/signup">SignUp</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
