import React from "react";
import Field from "./Field";

const onRender = ({ field, form }) => {
  return <input className="form-control" formNoValidate {...field} />;
};
export default function Text(props) {
  return <Field {...props} onRender={onRender} />;
}
