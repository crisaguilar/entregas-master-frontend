import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { fetchMember, MemberEntity } from "../getAPI";

const defaultMemeberDetail = (): MemberEntity => ({
  id: "",
  avatar_url: " ",
  login: " ",
});

export const Detail: React.FC = () => {
  const { id, organization } = useParams();
  const [member, setMember] = React.useState(defaultMemeberDetail());

  function getMember() {
    fetchMember(id).then(setMember);
  }

  React.useEffect(() => {
    getMember();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Typography variant="h5">Detail page</Typography>
      <Typography>User Id: {member.id}</Typography>
      <Typography>
        Company name:{" "}
        {organization.charAt(0).toUpperCase() + organization.slice(1)}
      </Typography>
      <Typography>Avatar URL: {member.avatar_url}</Typography>
      <Typography>Login: {member.login}</Typography>

      <Button onClick={goBack} variant="outlined" type="submit">
        Back to list page
      </Button>
    </>
  );
};
