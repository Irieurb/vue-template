<template>
  <h1>Register</h1>
</template>

<script>
export default {
  mounted() {
    this.title();
  },
  methods: {
    title() {
      this.$store.dispatch("CHANGE_APPLICATION_TITLE", "Register");
    }
  }
};
</script>

<style>
</style>
