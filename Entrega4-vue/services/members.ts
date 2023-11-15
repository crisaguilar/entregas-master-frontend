import type { MemberDetail, Member } from "@/types";

export const membersService = {
  async get(organizationName: string) {
    const members = await $fetch<Member[]>(
      `https://api.github.com/orgs/${organizationName}/members`
    );
    return members;
  },

  async getMemberByLogin(login: string) {
    const member = await $fetch<MemberDetail>(
      `https://api.github.com/users/${login}`
    );

    return member;
  },
};
