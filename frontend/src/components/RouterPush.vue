<template>
  <div class="container">
    <h1>Router push page</h1>
    <h1>a : {{ this.a }}</h1>
    <input type="button" @click="test" value="click" />
  </div>
</template>

<script>
export default {
  props: ["a"],
  methods: {
    test() {
      console.log(JSON.parse(this.a));
    },
  },
};
</script>

<style>
.container {
  margin-left: 300px;
}
</style>