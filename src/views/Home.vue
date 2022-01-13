<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button type="button" @click="goToDayBook" class="btn btn-primary">
      Primary
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>