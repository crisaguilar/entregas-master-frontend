import React from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { MemberList } from "./components/MemberList";
import { fetchMembers } from "../getAPI";

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


  function updateMembers() {
    fetchMembers(organization).then(setMembers);
  }

  React.useEffect(() => {
    updateMembers();
  }, []);

  return (
    <>
      <SearchBar
        getMembers={updateMembers}
        organization={organization}
        setOrganization={setOrganization}
      />
      <MemberList members={members} organization={organization} />
    </>
  );
};
