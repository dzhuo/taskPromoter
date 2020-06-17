<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: {
        defaultActive: "task-dashboard",
        menuList: [
          {
            count: 0,
            content: "概况",
            name: "task-dashboard",
            route: "/task/dashboard",
            iconType: "ios-american-football-outline"
          },
          {
            count: 3,
            content: "任务",
            name: "task-List",
            route: "/task/taskList",
            iconType: "ios-american-football-outline"
          },
          {
            count: 3,
            content: "工程模块",
            name: "project-List",
            route: "/task/projectList",
            iconType: "ios-american-football-outline"
          }
        ]
      }
    };
  },
  created() {
    this.$store.dispatch("setMenu", { menu: this.menu });
  },
  methods: {}
};
</script>
<style scoped>
.ivu-tabs {
  background: rgba(204, 37, 37, 0.973);
}
</style>

