import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>

      <Button onClick={goBack} variant="outlined" type="submit">
        Back to list page
      </Button>
    </>
  );
};
