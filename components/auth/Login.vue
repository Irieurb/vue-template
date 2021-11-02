<template>
  <h1>Login</h1>
</template>

<script>
export default {
  mounted() {
    this.title();
  },
  methods: {
    title() {
      this.$store.dispatch("CHANGE_APPLICATION_TITLE", "Login");
    }
  }
};
</script>

<style>
</style>
