import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { register } from "../../context/actions/auth/register";

const RegisterContainer = () => {
  useEffect(() => {
    register()

  }, []);

  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

export default RegisterContainer;
