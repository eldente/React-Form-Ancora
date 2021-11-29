import { useState, useContext } from "react";
import { ContextProvider } from "../App";

function LoginForm() {
  const { setIsAuth } = useContext(ContextProvider);
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setIsAuth(true);
      setError("");
    } else {
      setError(
        "Your Login information does not match our records! Please try again."
      );
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-body">
        <h1>Login</h1>
        {error !== "" ? <div className="error">{error}</div> : ""}

        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input className="login-button" type="submit" value="LOGIN"></input>
      </div>
    </form>
  );
}

export default LoginForm;
