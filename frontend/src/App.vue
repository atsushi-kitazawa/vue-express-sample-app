<template>
  <div>
    <sidebar-menu :menu="menu" />
    <div class="header">
      <div class="container">
        <h1>Header</h1>
      </div>
    </div>
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
          href: "/user",
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