<template>
    <div>
    <Row>
      <Card>
               <Input v-model="noteContent" type="textarea" :rows="27" placeholder="记事本" />
      </Card>
    </Row>
    </div>
</template>
<script>
const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function(event, arg) {
  console.log(arg); 
});

export default {
    data() {
        return {
            noteContent:"",
            menu: [
              
            ]
        };
    },
    created(){
      this.$store.dispatch('setMenu', {menu: this.menu});
    },
    watch:{
        noteContent:function(a,b){
            console.log("渲染发送异步消息返回"+ipcRenderer.send('asynchronous-message', 'ping'));
            console.log("渲染发送同步消息返回"+ipcRenderer.sendSync('synchronous-message', a));
        }
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

