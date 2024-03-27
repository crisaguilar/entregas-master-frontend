import React from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { MemberList } from "./components/MemberList";
import { fetchMembers } from "../getAPI";
import { Typography } from "@mui/material";
import "./listContainer.css";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListContainer: React.FC = () => {
  const params = useParams();
  let urlOrganization = "lemoncode";
  if (params.organization) {
    urlOrganization = params.organization;
  }

  const [organization, setOrganization] =
    React.useState<string>(urlOrganization);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [isError, setIsError] = React.useState<Boolean>(false);

  function updateMembers() {
    fetchMembers(organization)
      .then((members) => {
        setMembers(members);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }

  React.useEffect(() => {
    updateMembers();
  }, []);

  return (
    <div>
      <SearchBar
        getMembers={updateMembers}
        organization={organization}
        setOrganization={setOrganization}
      />
      {isError ? (
        <div className="error-container">
          <Typography> Company not found, try with another name</Typography>
        </div>
      ) : (
        <MemberList members={members} organization={organization} />
      )}
    </div>
  );
};
