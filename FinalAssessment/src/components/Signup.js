import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Signup = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "100vh",
    align: "center",
    width: 300,
    margin: "20px auto",
  };
  const headerStyle = {
    margin: 0,
  };
  const marginTop = {
    marginTop: 5,
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    age: "",
    email: "",
  };
  const onSubmit = (values, props) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(3, "Its too short")
      .required("Please enter firstname"),
    lastname: Yup.string()
      .min(3, "Its too short")
      .required("Enter your lastname"),
    phonenumber: Yup.string()
      //.number().typeError('Enter valid phonenumber')
      .min(10, "Enter valid phone number")
      .max(12, "Enter valid phone number")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number must be valid"
      )
      .required("Enter your phonenumber"),
    age: Yup.string().required("Enter your age"),
    email: Yup.string().email("Enter valid email").required("Enter your email"),
  });
  const navigate = useNavigate();
  function navigateHandler() {
    //navigate('/');
    navigate("/setpassword");
  }
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">
            Please fill the form to create an account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <Field
                as={TextField}
                fullWidth
                name="firstname"
                label="FirstName"
                type={"text"}
                placeholder="Enter your FirstName"
                helperText={<ErrorMessage name="firstname" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="lastname"
                label="LastName"
                type={"text"}
                placeholder="Enter your LastName"
                helperText={<ErrorMessage name="lastname" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="phonenumber"
                label="PhoneNumber"
                placeholder="Enter your phonenumber"
                helperText={<ErrorMessage name="phonenumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="age"
                label="Age"
                placeholder="Enter your age"
                type={"number"}
                helperText={<ErrorMessage name="age" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                type={"email"}
                placeholder="Enter your emailId"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl style={marginTop}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <br></br>
              <br></br>
              <label>Skills</label>
              <br></br>
              <br></br>
              <Checkbox {...label} type="checkbox" name="skills" id="skills" />
              <span id="java"> Java</span>
              &nbsp; &nbsp;
              <Checkbox {...label} type="checkbox" name="skills" id="skills" />
              <span id="sql"> SQL</span>
              &nbsp; &nbsp;
              <Checkbox {...label} type="checkbox" name="skills" id="skills" />
              <span id="react"> React</span>
              &nbsp; &nbsp;
              <br></br>
              <br></br>
              <Button
                type="submit"
                disabled={!props.isValid}
                onClick={navigateHandler}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
