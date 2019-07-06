<template style="height: 100%">
  <div style="height: 100%;">
    <div class="bg"></div>
    <div class="content">
      欢迎使用
      <p class="brief-info">协助你完成你的任务</p>
      </div>
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
  position: absolute;
}
.content {
  font-size: 60px;
  width: 100%;
  margin-top: 29%;
  margin-left: 46%;
  align-content: center;
  position:absolute;
}
.brief-info{
 font-size: 20px
}
</style>

