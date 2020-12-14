import React from "react";
import "./Login.scss";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="container-fluid">
      <div className="Login row align-items-center justify-content-center position-relative">
        <div
          className="col-sm-6 d-none d-md-block"
          style={{
            backgroundImage: `url(./images/young-black.png)`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        ></div>
        <div className="col-sm-6">
          <div className="container" style={{maxWidth: "580px"}}>
            <h2 className="title title--smaller mb-4">Sign In</h2>
            <p className="lead">Welcome back!</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
