import React from "react";

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {/* if props.alert is undefined then next element is not snhow */}
    {/* this is javascript so we have to write in curly braces see video at 14.00 */}
    {props.alert && <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>{props.alert.type}</strong>:{props.alert.message}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>}
    </div>
  );
}
