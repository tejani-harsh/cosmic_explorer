import { Button, TextField } from "@mui/material";
import style from "./Login.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [userError, setUserError] = useState(false);
  function handleSubmit() {
    if (
      username.current.value === "harsh" &&
      password.current.value === "demo"
    ) {
      setUserError(false);
      navigate("/home");
    } else {
      setUserError(true);
    }
  }
  return (
    <div className={style.main}>
      <div className={style.loginBox}>
        <h1>Cosmic Explorer</h1>
        <TextField
          id="username"
          label="User name"
          inputRef={username}
          error={userError}
        />
        <TextField
          id="password"
          label="Password"
          inputRef={password}
          error={userError}
          type="password"
        />

        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
