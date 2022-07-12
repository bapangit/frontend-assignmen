import React from "react";
import Field from "./Field";

export default function Select({ options, ...rest }) {
  const onRender = ({ field, form }) => {
    return (
      <select className="form-control" {...field}>
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
