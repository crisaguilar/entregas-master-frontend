import React from "react";
import { MemberList } from "./MemberList";
import { getMembers, MemberEntity } from "./getAPI";
import { Filter } from "./Filter";


export function OrganizationPage() {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>("lemoncode");


  React.useEffect(() => {
    getMembers(organization).then(setMembers);
  }, []);

  function updateMembers() {
    getMembers(organization).then(setMembers);
  }

  return (
    <>
      <Filter setOrganization={setOrganization} updateMembers={updateMembers} />
      <MemberList members={members} />
    
    </>
  );
}
