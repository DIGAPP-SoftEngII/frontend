import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div className="loading">
      <Spinner color="dark" />
    </div>
  );
}

export default Loading;
