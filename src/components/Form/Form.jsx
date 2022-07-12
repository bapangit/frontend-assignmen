import { Formik, Form as FormikForm } from "formik";
import React from "react";

export default function Form(props) {
  return (
    <Formik {...props}>
      <FormikForm>{props.children}</FormikForm>
    </Formik>
  );
}
