<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.title();
  },
  methods: {
    title() {
      this.$store.dispatch("CHANGE_APPLICATION_TITLE", "Dashboard");
    }
  }
};
</script>

<style>
</style>
