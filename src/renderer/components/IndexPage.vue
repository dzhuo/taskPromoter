<template>
    <div>
        <Time :time="time3" :interval="1"/>
        <Button type="primary" @click="showState">showState</Button>
        <Button type="primary" @click="handleStart">changeMenu</Button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time3: new Date(),
            rightMenu:[]
        };
    },
     created(){
      this.$store.dispatch('setRightMenu', {rightMenu: this.rightMenu});
    },
    methods: {
        showState() {
            console.log(this.$store.state.Counter.main);
            this.$Modal.info({
                title: "test",
                content: this.$store.state.Counter.main
            });
        },
        handleStart() {
            this.$store.dispatch("setRightMenu", {
                rightMenu: [
                    {
                        count: 0,
                        content: "概况",
                        name: "dashboard",
                        route: "/task/dashboard",
                        iconType: "ios-american-football-outline"
                    },
                    {
                        count: 0,
                        content: "进行中",
                        name: "taksList",
                        route: "/task/taksList",
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
                ]
            });
        }
    }
};
</script>