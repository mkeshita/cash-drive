import React, {useState} from "react";
import Input from "../Input/Input";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form onSubmit="">
      <div className="py-2">
        <Input
          value={email}
          placeholder={"Email Address"}
          handlechange={(e) => setEmail(e.target.value)}
          type="Email"
        />
      </div>
      <div className="py-2">
        <Input
          value={password}
          placeholder={"Password"}
          type={"password"}
          handlechange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button class="btn px-5 mt-5 btn-orange">Sign In</button>
    </form>
  );
}

export default LoginForm;
