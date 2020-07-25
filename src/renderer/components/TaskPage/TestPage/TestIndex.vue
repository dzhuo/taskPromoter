<template>
  <Content>
    <Input v-model="url" search enter-button placeholder="URL" @on-search="onWebView" />
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
    webview.addEventListener("ipc-message", event => {
      console.log(event.channel,"ipc-message"); //打印返回值
    });
    webview.addEventListener("dom-ready", () => {
      webview.openDevTools(); //webview加载完成，可以处理一些事件了
    });
  }
};
</script>
<style scope>
</style