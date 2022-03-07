import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";

const FeedbackForm = (props) => {
  const [rating, setRating] = React.useState(2);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      like: Yup.string()
        .max(20, "Must be 20 characters or less")
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
      component="form"
      //   sx={{
      //     "& .MuiTextField-root": { m: 1, width: "25ch" },
      //   }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={formik.handleSubmit} id="whole-form">
        <Card sx={{ pt: 2, borderTop: "5px solid #002677" }}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Card>

        {/** "Full Name" **/}
        <Card
          style={{ padding: 20, marginTop: 20, borderTop: "5px solid #002677" }}
        >
          <h2>Section One: General Impressions</h2>
          <TextField
            required
            id="fullName"
            type="text"
            label="Name"
            {...formik.getFieldProps("fullName")}
          />
          {/* Checks firstName input for youched and errors */}
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="error">
              <ArrowUpwardIcon />
              {formik.errors.fullName}
            </div>
          ) : null}

          {/** "Rating" **/}

          <div className="inputbox">
            <p>How would you rate your experience?</p>
            <Rating
              name="simple-controlled"
              id="rating"
              size="large"
              value={rating}
              label="rating"
              {...formik.getFieldProps("rating")}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
        </Card>

        <Card
          style={{ padding: 20, marginTop: 20, borderTop: "5px solid #002677" }}
        >
          <h2>Section Two: Specific Functionality</h2>
          {/** "What do you like?" **/}

          <TextField
            id="like"
            label="What do you like?"
            multiline
            required
            rows={8}
            {...formik.getFieldProps("like")}
          />
          {formik.touched.like && formik.errors.like ? (
            <div className="error">
              <ArrowUpwardIcon />
              {formik.errors.like}
            </div>
          ) : null}

          {/** "What don't you like?" **/}

          <TextField
            id="dislike"
            label="What don't you like?"
            multiline
            rows={8}
            {...formik.getFieldProps("dislike")}
          />
          {/* Checks firstName input for youched and errors */}
          {formik.touched.dislike && formik.errors.dislike ? (
            <div className="error">
              <ArrowUpwardIcon />
              {formik.errors.dislike}
            </div>
          ) : null}
        </Card>

        <Card
          style={{ padding: 20, marginTop: 20, borderTop: "5px solid #002677" }}
        >
          <h2>Section Three: Parting Shots</h2>
          {/** "Additional Comments" **/}

          <TextField
            id="additionalComments"
            label="Additional comments."
            multiline
            rows={8}
            {...formik.getFieldProps("additionalComments")}
          />
          {/* Checks firstName input for youched and errors */}
          {formik.touched.additionalComments &&
          formik.errors.additionalComments ? (
            <div className="error">
              <ArrowUpwardIcon />
              {formik.errors.additionalComments}
            </div>
          ) : null}
        </Card>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FeedbackForm;
