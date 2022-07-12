import React from "react";
import { Field as FormikField, ErrorMessage } from "formik";
export default function Field(props) {
  const { label, name, onRender } = props;
  const validator = (value) => {
    const { required } = props;
    let error;
    if (required && value.length < 1) {
      error = name + " cannot be empty";
    }
    return error;
  };
  return (
    <div style={{ fontSize: "1.5rem" }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <FormikField
        {...props}
        validate={validator}
        render={
          onRender
            ? onRender
            : ({ field, form }) => {
                return <input formNoValidate {...field} />;
              }
        }
      />
      <br />
      <ErrMsg name={name} />
    </div>
  );
}
const ErrMsg = (props) => {
  return (
    <div
      style={{
        color: "red",
        fontSize: "1rem",
        minHeight: "1rem",
      }}
    >
      <ErrorMessage {...props} />
    </div>
  );
};
