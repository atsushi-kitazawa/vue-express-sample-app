<template>
  <div class="container">
    <h1>Index page</h1>
    <h1>Count : {{ count }}</h1>
    <input type="button" @click="increment" value="test" />
    <br />
    <input type="button" @click="transition" value="router push" />
    <br />
    <input v-model="isAdmin" />
    <input type="button" @click="gotoAdmin" value="isAdmin">
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isAdmin: "",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    transition() {
      var data = [
        {
          key: "key1",
          val: "val1",
        },
        {
          key: "key2",
          val: "val2",
        },
        {
          key: "key3",
          val: "val3",
        },
      ];
      this.$router.push({
        name: "RouterPush",
        params: { testJson: JSON.stringify(data) },
      });
    },
    gotoAdmin() {
      sessionStorage.setItem("isAdmin", this.isAdmin)
      this.$router.push({name: "Admin"})
    },
  },
};
</script>

<style>
.container {
  margin-left: 300px;
}
</style>