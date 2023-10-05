import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./getAPI";

interface Props {
  members: MemberEntity[];
}

export const MemberList: React.FC<Props> = (props: Props) => {
  return (
    <>
      {Array.isArray(props.members) ? (
        <>
          <h2>Employee List</h2>
          <div className="list-user-list-container">
            <span className="list-header">Avatar</span>
            <span className="list-header">Id</span>
            <span className="list-header">Name</span>
            {props.members.map((member) => (
              <React.Fragment key={member.id}>
                <img
                  src={member.avatar_url}
                  alt={`Picture of ${member.login}`}
                />
                <span>{member.id}</span>
                <Link to= {`/detail/${member.company}`} >{member.login}</Link>
              </React.Fragment>
            ))}
          </div>
        </>
      ) : (
        <p>Oh Sorry! We don't have details about this organization.</p>
      )}
    </>
  );
};
