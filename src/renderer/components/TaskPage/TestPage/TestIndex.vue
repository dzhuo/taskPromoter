<template>
  <Content>
    <Input v-model="url" search enter-button placeholder="URL" @on-search="openUrl" />
    <webview
      id="foo"
      src="http://10.1.12.102/portal"
      style="display:inline-flex;height:720px;width:100%"

    ></webview>
  </Content>
</template>
<script>
import DataHandler from "@/object/db/DataHandler.js";
export default {
  data() {
    return {
      url: ""
    };
  },
  methods: {
    onWebView() {
      const webview = document.querySelector("webview");
      const ret = webview.send("getRequert"); //向webview页面发送请求
      console.log(ret);
    },
    openUrl() {
      const webview = document.querySelector("webview");
      webview.setAttribute("src", this.url);
    }
  },
  mounted() {
  
    const webview = document.querySelector("webview");
    
    const preloadFile =
      "file://" +
      require("path").resolve(
        "src/renderer/components/TaskPage/TestPage/js/preload.js"
      );
    webview.setAttribute("preload", preloadFile);
    //劫持webview页面的ajax请求并打印
    webview.addEventListener("ipc-message", event => {
      console.log(event.channel,"ipc-message"); //打印返回值
    });
    webview.addEventListener("dom-ready", async () => {
      webview.openDevTools(); //webview加载完成，可以处理一些事件了
    });


    //获取访问url时加载的静态文件html/css/js/icon等
    // var session =  webview.getWebContents().session;
  
    // session.webRequest.onCompleted({ urls: ['*'] }, (details) => {
    //   console.log(details.url);
    // })
    
  }
};
</script>
<style scope>
</style