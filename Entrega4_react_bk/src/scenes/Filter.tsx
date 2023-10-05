import React from "react";

interface Props {
  setOrganization: (x: string) => void;
  updateMembers: () => void;
}

export function Filter(props: Props) {
const [username, setUsername] = React.useState<string>("lemoncode");

  function getOrganitation(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
    props.setOrganization(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    props.updateMembers();
  }
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      props.updateMembers();
    }
  }


  return (
    <>
      <h1>Filter by Company</h1>
      <input type="text" value={username} onChange={getOrganitation} onKeyDown={handleKeyDown} />
      <button onClick={handleClick}>Search</button>
    </>
  );
}
