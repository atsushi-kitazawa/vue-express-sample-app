<template>
  <div id="panel">
    <sidebar-menu
      :collapsed="collapsed"
      :menu="menu"
      :theme="selectedTheme"
      :show-one-child="true"
      @collapse="onCollapse"
      @itemClick="onItemClick"
    ></sidebar-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: "Vue Express Sample App",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Index",
          icon: "fa fa-user",
        },
        {
          href: {
            name: "User",
          },
          title: "User",
          icon: "fa fa-chart-area",
        },
      ],
    };
  },
  collapsed: false,
  themes: [
    {
      name: "Default theme",
      input: "",
    },
    {
      name: "White theme",
      input: "white-theme",
    },
  ],
  selectedTheme: "white-theme",
  isOnMobile: false,
};
</script>

<style>
.header {
  font-size: 50px;
  margin-left: 300px;
}
</style>