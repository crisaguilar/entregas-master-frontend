export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const fetchMembers = (organization: String): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    }
  );
};

export const fetchMember = (id: string): Promise<MemberEntity> => {
  return fetch(`https://api.github.com/users/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  });
};
