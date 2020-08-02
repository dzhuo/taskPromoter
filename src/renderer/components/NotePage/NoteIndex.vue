<template>
    <div>
    <Row>
          <Card>
              <Row>
                  <Col span="4">
            <Button type="success" :loading="addFlag" shape="circle"  @click="addNote">
                <span v-if="!addFlag"  ><Icon type="md-add" /></span>
                <span v-else ></span>
            </Button>
                        <Button type="error" :loading="deleteFlag" shape="circle"  @click="deleteNote">
                <span v-if="!deleteFlag" ><Icon type="md-trash" /></span>
                <span v-else ></span>
            </Button>
                  </Col >
                  <Col span="8"></Col >
              </Row>

         </Card>
    </Button>
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
              
            ],
            deleteFlag:false,
            addFlag:false
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
        deleteNote () {
            this.deleteFlag = true;
            this.$Modal.info({
                title: "提示",
                content: "你点击了删除按钮",
                onOk:()=>{
                      this.deleteFlag = false;
                }
            });
            
        },
        addNote () {
            this.addFlag = true;
            this.$Modal.info({
                title: "提示",
                content: "你点击了添加按钮",
                onOk:()=>{
                    this.addFlag = false;
                }
            });
            
        }
    }
};
</script>
<style scoped>
.ivu-tabs {
    background: rgba(204, 37, 37, 0.973);
}
</style>

