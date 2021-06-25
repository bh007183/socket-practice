import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function Alerts(props) {
  return (
    <div>
      {props.success ? (
        <Alert severity="success">
          {props.alert}
        </Alert>
      ) : (
        <Alert severity="error">
          {props.alert}
        </Alert>
      )}
    </div>
  );
}
