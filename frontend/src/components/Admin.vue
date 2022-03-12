<template>
  <div class="container">
    <h1>admin page</h1>
    {{ a }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "",
    };
  },
  mounted() {
    this.a = sessionStorage.getItem("isAdmin");
  },
};
</script>

<style>
.container {
  margin-left: 300px;
}
</style>