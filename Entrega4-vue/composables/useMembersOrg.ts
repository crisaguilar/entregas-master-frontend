import { defineStore } from "pinia";

export const useStore = defineStore("organization", () => {
  const state = {
    organizationName: `lemoncode`,
  };

  const setOrganization = (inputValue: string): void => {
    state.organizationName = inputValue;
  };

  const getOrganization = (): string => {
    return state.organizationName;
  };
  return {
    state,
    setOrganization,
    getOrganization,
  };
});
