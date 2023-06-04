import React, { useEffect, useState } from "react";

const LoginMessageApp = ({ message }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (message == "Login OK") {
      setColor("alert-success");
    } else {
      setColor("alert-danger");
    }
  }, [message]);

  return (
    <div className={`alert ${color} text-center`} role="alert">
      {message}
    </div>
  );
};

export default LoginMessageApp;