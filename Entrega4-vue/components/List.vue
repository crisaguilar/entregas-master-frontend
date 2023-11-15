<template>
  <Search @search-by-organization="onSearch" />
  <div class="list-container">
    <section class="wrapper">
      <div class="flex align-items-center justify-content-between">
        total: {{ membersSum }}
      </div>

      <ul class="member-list">
        <li v-for="member in list" :key="member.id">
          <NuxtLink :to="`/members/${member.login}`">
            <ListItem :member="member" />
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Member } from "~/types";

const { members, totalMembers } = await useMembersApi();
let membersSum = ref(totalMembers);
const list = ref<Member[]>(members);

const onSearch = async () => {
  const response = await useMembersApi();
  list.value = response.members;
  membersSum = response.totalMembers;
};
</script>

<style lang="scss" scoped>
.list-container {
  margin-left: 10px;
}
.member-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
</style>
