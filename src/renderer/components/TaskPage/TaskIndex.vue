<template>
  <div>
     <Button @click="handleStart">open tasks</Button>
           <router-view></router-view>
  </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    }
</script>
<style scoped>
  .ivu-tabs {
    background:rgba(204, 37, 37, 0.973);
  }
</style>

