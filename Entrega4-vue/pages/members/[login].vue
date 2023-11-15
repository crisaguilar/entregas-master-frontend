<template>
  <div class="container" id="app">
    <article>
      <div>
        <img :src="member?.avatar_url" alt="" />
      </div>
      <div>
        <span>Name: </span>
        {{ member?.name }}
      </div>
      <div>
        <span>e-mail: </span>
        {{
          member?.email
            ? member.email
            : "oh! Information no available for this member"
        }}
      </div>
      <div>
        <span>Bio: </span>
        {{
          member?.bio
            ? member.bio
            : "oh! Information no available for this member"
        }}
      </div>
      <div>
        <span>Organization: </span>
        {{ organizationName }}
      </div>
    </article>
  </div>
  <div class="backButton">
    <NuxtLink to="/" class="back" id="app">Go back</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { membersService } from "~~/services/members";
import type { MemberDetail } from "~~/types";

const route = useRoute();
const login = route.params.login as string;
const { state } = useStore();
const organizationName = state.organizationName;

const { data: member } = useAsyncData<MemberDetail>(() =>
  membersService.getMemberByLogin(login)
);
</script>

<style scoped>
.back {
  display: block;
  margin: 3rem 1rem;
  width: bold;
}
img {
  width: 90px;
}
</style>
