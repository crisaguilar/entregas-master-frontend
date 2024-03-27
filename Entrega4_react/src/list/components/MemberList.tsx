import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import './memberList.css';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface Props {
  members: MemberEntity[];
  organization: string;
}

export const MemberList: React.FC<Props> = ({
  members,
  organization,
}: Props) => {
  return (
    <div className="member-list-container">
      <Box sx={{ flexDirection: "row" }}>Avatar </Box>
      <Box sx={{ flexDirection: "row" }}>Id </Box>
      <Box sx={{ flexDirection: "row" }}>Name </Box>
      {members.map((member) => (
        <>
          <Avatar
            src={member.avatar_url}
            sx={{ width: 75, height: 75 }}
            variant="rounded"
          />
          <Typography>{member.id}</Typography>
          <Link to={`/detail/${organization}/${member.login}`}>
            {member.login}
          </Link>
        </>
      ))}
    </div>
  );
};
