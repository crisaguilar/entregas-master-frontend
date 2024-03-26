import React from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { MemberList } from "./components/MemberList";

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

  function fetchMembers(organization: string) {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }

  React.useEffect(() => {
    fetchMembers(organization);
  }, []);

  return (
    <>
      <SearchBar
        getMembers={fetchMembers}
        organization={organization}
        setOrganization={setOrganization}
      />
      <MemberList members={members} />
    </>
  );
};
