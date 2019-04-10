<template>
    <div>
        <Button @click="handleStart">open tasks</Button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rightMenu: [
                {
                    count: 3,
                    content: "进行中",
                    name: "working",
                    route: "/task/working",
                    iconType: "ios-american-football-outline"
                },
                {
                    count: 2,
                    content: "待开始",
                    name: "waiting",
                    route: "/task/waiting",
                    iconType: "md-aperture"
                },
                {
                    count: 1,
                    content: "已完成",
                    name: "finish",
                    route: "/task/finish",
                    iconType: "md-list-box"
                }
            ]
        };
    },
    created(){
      this.$store.dispatch('setRightMenu', {rightMenu: this.rightMenu});
    },
    methods: {
        handleStart() {
            this.$store.dispatch('setRightMenu', {rightMenu: [
                {
                    count: 0,
                    content: "进行中",
                    name: "working",
                    route: "/task/working",
                    iconType: "ios-american-football-outline"
                },
                {
                    count: 0,
                    content: "待开始",
                    name: "waiting",
                    route: "/task/waiting",
                    iconType: "md-aperture"
                },
                {
                    count: 0,
                    content: "已完成",
                    name: "finish",
                    route: "/task/finish",
                    iconType: "md-list-box"
                }
            ]});
        }
    }
};
</script>
<style scoped>
.ivu-tabs {
    background: rgba(204, 37, 37, 0.973);
}
</style>

