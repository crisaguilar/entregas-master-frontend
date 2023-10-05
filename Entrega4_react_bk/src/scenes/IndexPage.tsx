import React from "react";
import { useNavigate } from "react-router-dom";

export const IndexPage = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/login");
  }, []);

  return <></>;
};
