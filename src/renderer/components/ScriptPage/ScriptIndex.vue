<template>
    <div>
        <Button @click="handleStart">open script</Button>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            rightMenu: [
                
            ]
        };
    },
    created(){
      this.$store.dispatch('setRightMenu', {rightMenu: this.rightMenu});
    },
    methods: {
        handleStart() {
            // this.$Modal.info({
            //     title: "Bravo",
            //     content: "Now, enjoy the convenience of iView."
            // });
        }
    }
};
</script>
<style scoped>
.ivu-tabs {
    background: rgba(204, 37, 37, 0.973);
}
</style>

