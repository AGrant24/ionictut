<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Cannot find Memory from the given ID</h2>
    <h2 v-else>Loaded it</h2>
  </base-layout>
</template>
<script>
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  //   watch: {
  //     $route(currentRoute) {
  //       this.memoryId = currentRoute.params.id;
  //     },
  //   },
};
</script>
