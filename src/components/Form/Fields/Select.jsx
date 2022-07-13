import React from "react";
import Field from "./Field";

export default function Select({ options, onChange, val, ...rest }) {
  const onRender = ({ field, form }) => {
    return (
      <select
        className="form-control"
        {...field}
        onChange={(e) => {
          form.setFieldValue(rest.name, e.target.value);
          onChange(e.target.value);
        }}
        value={val || ""}
        style={{ fontSize: "1.5rem", textTransform: "capitalize" }}
      >
        <option disabled={true} value="">
          Choose {rest.label}
        </option>
        {options &&
          options.map((val, key) => {
            return (
              <option key={key} value={val}>
                {val}
              </option>
            );
          })}
      </select>
    );
  };
  return <Field {...rest} onRender={onRender} />;
}
