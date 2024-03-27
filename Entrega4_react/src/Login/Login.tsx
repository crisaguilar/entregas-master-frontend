import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import './login.css';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <form onSubmit={handleNavigation} className="login-container">
      <Typography variant="h5">Login Page</Typography>
      <div className="inputs-container">
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
        />
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
      </div>
      <Button variant="outlined" type="submit" className="button">
        Login
      </Button>
    </form>
  );
};
