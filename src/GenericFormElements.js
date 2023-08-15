import * as React from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuItem from "@mui/material/MenuItem";

// Styles
import styles from "./Form.module.css";

import InputMask from "react-input-mask";

import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import { ClassNames } from "@emotion/react";
import { Container, FormControl, FormLabel } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";
import { RestoreFromTrash } from "@mui/icons-material";

// example for select

const options = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
  {
    value: "option4",
    label: "Option 4",
  },
];

const validationSchema = Yup.object({
  textField: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  numberField: Yup.string()
    .max(9, "Required / Must Be 9 Digits")
    .min(9, "Must Be 9 Digits")
    .required("Required"),
  multiline: Yup.string().required("Required"),
  selectBox: Yup.string().required("Required"),
  radioGroup: Yup.string().required("Required"),
});

const FeedbackForm = (props) => {
  //const [rating, setRating] = React.useState(2);

  const formik = useFormik({
    initialValues: {
      textField: "Initial Value? Sure!",
      numberField: "",
      multiline: "",
      selectBox: "",
      radioGroup: "",
      checkBox: false,
      dateField: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
      //  formik.values.textField = "Hello World!"
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
        value={formik.values.textField}
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
        label="Select Box"
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

      {/* 
Radio Group  */}
      <br />
      <br />
      <br />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Options Group</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          id="radioGroup"
          {...formik.getFieldProps("radioGroup")}
          name="radioGroup"
        >
          <FormControlLabel
            value="Option 1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="Option 2"
            control={<Radio />}
            label="Option 2"
          />
          <FormControlLabel
            value="Option 3"
            control={<Radio />}
            label="Option 3"
          />
        </RadioGroup>
      </FormControl>

      {formik.touched.radioGroup && formik.errors.radioGroup ? (
        <div className="error">
          <ArrowUpwardIcon />
          {formik.errors.radioGroup}
        </div>
      ) : null}

      {/* 
Checkbox */}
      <br />
      <br />

      <FormControlLabel
        value="top"
        control={<Checkbox />}
        label="Yes or No?"
        //  labelPlacement="top"
        {...formik.getFieldProps("checkBox")}
      />

      {formik.values.checkBox != "" ? (
        <div style={{ padding: 20, background: "red" }}>Hi there!</div>
      ) : (
        ''
      )}

      {/* 
date picker */}

      <br />
      <br />
      <label for="dateField" style={{color: 'rgba(0, 0, 0, 0.6)'}}>Date Field:</label>
      <TextField
        fullWidth
        placeholder="Date Field"
        id="dateField"
        name="dateField"
        type="date"
        value={formik.values.dateField}
        variant="filled"
        {...formik.getFieldProps("dateField")}
      />

      <Button
        color="primary"
        variant="contained"
        fullWidth
        style={{ marginTop: 60 }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default FeedbackForm;
