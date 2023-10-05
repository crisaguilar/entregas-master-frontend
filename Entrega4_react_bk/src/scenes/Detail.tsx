import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MemberEntity } from "./getAPI";

const defaultMemeberDetail = (): MemberEntity => ({
  id: " ",
  login: " ",
  avatar_url: " ",
  name: " ",
  company: " ",
});

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState(defaultMemeberDetail());

  const { id } = useParams();
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <img src={member.avatar_url} alt={`Picture of ${member.login}`} />
      <h2>Id: {member.id}</h2>
      <p>Login: {member.login}</p>
      <p>Name: {member.name}</p>
      <p>Company: {member.company}</p>
      <Link to={`detail/${member.company}`}>Back to list page</Link>
      {/* <button onClick={goBack}>Back</button>  */}
    </>
  );
};
