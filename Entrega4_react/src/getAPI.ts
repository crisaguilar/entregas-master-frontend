export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}


export const fetchMembers = (name: String): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${name}/members`).then((response) =>
    response.json()
  );
};

export const fetchMember = (id: string): Promise<MemberEntity> => {
  return fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json()
  );
};
