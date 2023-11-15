<template>
  <div class="search-container">
    <hr />
    <input type="text" v-model="inputValue" />
    <button type="button" @click="searchByOrganization">Search</button>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/composables/useMembersOrg";

const { state, setOrganization } = useStore();
const inputValue = ref(state.organizationName);

const $emit = defineEmits(["searchByOrganization"]);

const searchByOrganization = () => {
  setOrganization(inputValue.value);

  $emit("searchByOrganization", inputValue.value);
};
</script>

