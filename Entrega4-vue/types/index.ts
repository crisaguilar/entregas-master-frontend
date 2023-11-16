export interface MemberDetail {
  avatar_url: string;
  name: string;
  email: string;
  login: string;
  bio: string;
  company: string;
}

export interface Member {
  id: number;
  login: string;
  avatar_url: string;
}
