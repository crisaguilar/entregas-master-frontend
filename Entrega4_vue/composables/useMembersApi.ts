import { membersService } from "~/services/members";

export default async function useMembersApi() {
  const { state } = useStore();
  const members = await membersService.get(state.organizationName);
  const totalMembers = computed(() => members.length);
  return {
    members,
    totalMembers,
  };
}
