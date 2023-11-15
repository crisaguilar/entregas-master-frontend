<template>
  <article class="grid member-container card">
    <div class="image">
      <img :src="member.avatar_url" alt="" loading="lazy" />
    </div>
    <div class="member-container__content">
      <p>
        <span class="blue-text">ID: </span>
        <strong>{{ member.id }}</strong>
      </p>
      <p>
        <span class="blue-text">Name: </span>
        {{ member.login }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Member } from "~/types";

defineProps<{
  member: Member;
}>();
</script>

<style lang="scss">
.member-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
  margin-top: 1%;
  margin-left: 0;
  cursor: pointer;
}

.member-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  img {
    width: 90px;
    object-fit: cover;
  }
}
</style>
