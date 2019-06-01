<template style="height: 100%">
  <div style="height: 100%">
    <div class="bg"></div>
    <div class="content">欢迎使用</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightMenu: []
    };
  },
  created() {
    this.$store.dispatch("setRightMenu", { rightMenu: this.rightMenu });
  }
};
</script>
<style scoped>
.bg{
  background-image: url("~@/assets/bg.jpg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(3px);
}
.content {
  font-size: 60px;
  width: 100%;
  height: 600px;
  align-content: center;
}
</style>

