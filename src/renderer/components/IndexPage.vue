<template>
    <Time :time="time3" :interval="100" />
</template>
<script>
    export default {
        data () {
            return {
                time3: new Date()
            }
        }
    }
</script>