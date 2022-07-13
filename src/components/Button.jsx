import React from "react";

export default function Button({ children, ...rest }) {
  return (
    <button className="btn btn-primary m-2" {...rest}>
      {children}
    </button>
  );
}
