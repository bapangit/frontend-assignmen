import React from "react";
import { Field as FormikField, ErrorMessage } from "formik";
export default function Field(props) {
  const { label, name, onRender } = props;

  return (
    <div style={{ fontSize: "2rem" }}>
      <label htmlFor={name}>{label || name}</label>
      <br />
      <FormikField
        {...props}
        render={
          onRender
            ? onRender
            : ({ field, form }) => {
                return <input formNoValidate {...field} />;
              }
        }
      />
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
        minHeight: "1.5rem",
      }}
    >
      <ErrorMessage {...props} />
    </div>
  );
};
