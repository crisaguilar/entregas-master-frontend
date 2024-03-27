import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Typography } from "@mui/material";
import { fetchMember, MemberEntity } from "../getAPI";
import "./detail.css";

const defaultMemeberDetail = (): MemberEntity => ({
  id: "",
  avatar_url: " ",
  login: " ",
});

export const Detail: React.FC = () => {
  const { id, organization } = useParams();
  const [member, setMember] = React.useState(defaultMemeberDetail());
  const [isError, setIsError] = React.useState<Boolean>(false);

  function getMember() {
    fetchMember(id)
      .then((member) => {
        setMember(member);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }

  React.useEffect(() => {
    getMember();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="detail-container">
      {isError ? (
        <div className="error-container">
          <Typography>Ups! seems that this employee doesn't exist</Typography>
        </div>
      ) : (
        <>
          <Typography variant="h5">Detail page</Typography>
          <Avatar
            src={member.avatar_url}
            sx={{ width: 75, height: 75 }}
            variant="rounded"
          />
          <Typography>User Id: {member.id}</Typography>
          <Typography>Name: {member.login}</Typography>
          <Typography>
            Company name:{" "}
            {organization.charAt(0).toUpperCase() + organization.slice(1)}
          </Typography>
        </>
      )}

      <Button onClick={goBack} variant="outlined" type="submit">
        Back
      </Button>
    </div>
  );
};
