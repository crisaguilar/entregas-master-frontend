import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const params = useParams();
  let urlOrganization = "lemoncode";
  if (params.organization) {
    urlOrganization = params.organization;
  }

  const [organization, setOrganization] =
    React.useState<string>(urlOrganization);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const navigate = useNavigate();

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
      <div>
        <input
          type="text"
          value={organization}
          onChange={(event) => {
            setOrganization(event.target.value);
          }}
        />
        <button
          onClick={() => {
            navigate(`/list/${organization}`);
            fetchMembers(organization);
          }}
        >
          Search
        </button>
      </div>

      <div className="member-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
