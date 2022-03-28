import * as React from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Styles
import styles from "./Form.module.css";

import InputMask from "react-input-mask";

import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import { ClassNames } from "@emotion/react";
import { Container } from "@mui/material";

const FeedbackForm = (props) => {
  //const [rating, setRating] = React.useState(2);

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      social: Yup.string()
        .max(1, "This is a fake form, Please dont enter your social.")
        .required("Required"),
      dislike: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("dont like error"),
      additionalComments: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("dont like error"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      sx={{
        background: "#0a1929",
        minHeight: "100vh",
        color: "rgba(250,250,250,.87)",
      }}
    >
      <form onSubmit={formik.handleSubmit} id="whole-form">
        <h1 style={{ fontSize: 52, margin: "0px auto 20px", maxWidth: 600 }}>
          {props.title}
          <svg
            style={{
              width: 50,
              marginLeft: 15,
              position: "absolute",
              marginTop: 10,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              stroke="green"
              stroke-width="3px"
              fill="white"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
            />
          </svg>
        </h1>
        <p
          style={{
            lineHeight: "1.75",
            fontSize: 18,
            maxWidth: 600,
            margin: "0px auto",
          }}
        >
          {props.description}
        </p>

        {/** "Full Name" **/}
          <Container style={{marginTop: 40, display: 'flex', flexDirection: 'column'}}>
        <TextField
          required
          id="fullName"
          type="text"
          label="Name"
          variant="filled"
          className={styles.inputBox}
          {...formik.getFieldProps("fullName")}
        />
        {/* Checks firstName input for touched and errors */}
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="error">
            <ArrowUpwardIcon />
            {formik.errors.fullName}
          </div>
        ) : null}
<p>Note: fake / parody website</p>
        {/* <InputMask
        mask="999-99-9999"
        disabled={false}
        maskChar=" "
        {...formik.getFieldProps("social")}
>
        {() =>     <TextField
    required
    id="social"
    label="social"
    variant="filled"
    className={styles.inputBox}

/> }
      </InputMask>
 */}

        <Button style={{padding: 20}} type="submit" variant="contained">
          Submit
        </Button>

        </Container>
      </form>
    </Box>
  );
};

export default FeedbackForm;
