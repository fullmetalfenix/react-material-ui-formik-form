import * as React from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuItem from '@mui/material/MenuItem';


// Styles
import styles from "./Form.module.css";

import InputMask from "react-input-mask";

import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import { ClassNames } from "@emotion/react";
import { Container } from "@mui/material";



// example for select


const options = [
  {
    value: 'option1',
    label: 'Option 1',
  },
  {
    value: 'option2',
    label: 'Option 2',
  },
  {
    value: 'option3',
    label: 'Option 3',
  },
  {
    value: 'option4',
    label: 'Option 4',
  },
];








const validationSchema = Yup.object({
  textField: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  numberField: Yup.string()
  .max(9, 'Required / Must Be 9 Digits')
  .min(9, 'Must Be 9 Digits')
  .required("Required"),
  multiline: Yup.string()
  .required("Required"),
  selectBox: Yup.string()
  .required('Required')
});

const FeedbackForm = (props) => {
  //const [rating, setRating] = React.useState(2);

  const formik = useFormik({
    initialValues: {
      textField: "",
      numberField:'',
      multiline: '',
      selectBox:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form id="whole-form" onSubmit={formik.handleSubmit}>
      {/* Example Text Field: */}
      <TextField
        fullWidth
        placeholder="Text Field"
        id="textField"
        name="textField"
        type="text"
        label="Text Input"
        variant="filled"
        {...formik.getFieldProps("textField")}
      />
      {formik.touched.textField && formik.errors.textField ? (
        <div
          className="error"
          style={{
            marginTop: 10,
            background: "rgba(250,250,250,.87)",
            color: "#0a1929",
            padding: 3,
            borderRadius: 20,
          }}
        >
          <ArrowUpwardIcon />
          {formik.errors.textField}
        </div>
      ) : null}



      {/* Example Number Field */}
      <TextField
      fullWidth
        type="number"
        placeholder="Number Field"
        id="numberField"
        label="9 Digit Number"
        style={{ marginTop: 40 }}
        variant="filled"
        {...formik.getFieldProps("numberField")}
      />
      {formik.touched.numberField && formik.errors.numberField ? (
        <div className="error">
          <ArrowUpwardIcon />
          {formik.errors.numberField}
        </div>
      ) : null}


{/* Multiline example */}

<TextField
          id="multiline"
          label="Multiline"
          multiline
          fullWidth
          rows={4}
          placeholder="Multi Line Text Field"
          style={{ marginTop: 40 }}
          variant="filled"
          {...formik.getFieldProps("multiline")}
        />


{formik.touched.multiline && formik.errors.multiline ? (
        <div className="error">
          <ArrowUpwardIcon />
          {formik.errors.multiline}
        </div>
      ) : null}






{/* Select Field */}

<TextField
          select
          label="Select"
          helperText="Please select your option"
          id="selectBox"
          label="selectBox"
          fullWidth
          placeholder="Select Field"
          style={{ marginTop: 40 }}
          variant="filled"
          {...formik.getFieldProps("selectBox")}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

{formik.touched.selectBox && formik.errors.selectBox ? (
        <div className="error">
          <ArrowUpwardIcon />
          {formik.errors.selectBox}
        </div>
      ) : null}








      <Button color="primary" variant="contained" fullWidth style={{marginTop: 60}} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FeedbackForm;
