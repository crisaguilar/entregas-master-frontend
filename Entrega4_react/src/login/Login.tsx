import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

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
    <>
      <form onSubmit={handleNavigation}>
        <Typography variant="h5">Login Page</Typography>
        <div>
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
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};
