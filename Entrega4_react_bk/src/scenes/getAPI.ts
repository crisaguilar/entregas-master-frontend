
export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  company:string;
}



export const getMembers = (name: String): Promise<MemberEntity[]>=> {
  return fetch(`https://api.github.com/orgs/${name}/members`).then(
    (response) => response.json()
  );
};
