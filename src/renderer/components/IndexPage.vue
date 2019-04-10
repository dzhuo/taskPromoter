<template>
<div>
    <Time :time="time3" :interval="1" />
    <Button type="primary" @click="showState">showState</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                time3: new Date()
            }
        },
        methods:{
            showState(){
                console.log(this.$store.state.Counter.main);
                this.$Modal.info({
                    title: 'test',
                    content: this.$store.state.Counter.main
                });
            }
        }
    }
</script>