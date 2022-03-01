<template>
  <div class="container">
    <h1>Index page</h1>
    <h1>Count : {{ count }}</h1>
    <input type="button" @click="increment" value="test" />
    <br />
    <input type="button" @click="transition" value="router push" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    transition() {
      // this.$router.push("/user")
      var data = {
        key1: "val1",
        key2: "val2"
      }
      this.$router.push({ name: "RouterPush", params: { a: JSON.stringify(data) } });
    },
  },
};
</script>

<style>
.container {
  margin-left: 300px;
}
</style>