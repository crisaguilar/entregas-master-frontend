import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import './searchBar.css';

interface Props {
  organization: string;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
  getMembers: (organization: string) => void;
}

export const SearchBar: React.FC<Props> = ({
  getMembers,
  organization,
  setOrganization,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="search container">
      <TextField
        type="text"
        value={organization}
        onChange={(event) => {
          setOrganization(event.target.value);
        }}
        label="Organization"
      />
      <Button
        variant="outlined"
        type="submit"
        onClick={() => {
          navigate(`/list/${organization}`);
          getMembers(organization);
        }}
      >
        Search
      </Button>
    </div>
  );
};
