const { ipcRenderer } = require('electron');
ipcRenderer.on('getRequert', (event, arg) => {
    console.log(event, arg);
    ipcRenderer.sendToHost(window.URL)
})
const xhrProxy = require('./xhr_proxy.js');
 
xhrProxy.addHandler(function(xhr){
    console.log(xhr)
    //TODO 具体业务代码
    //通过ipcRenderer.sendToHost即可将xhr内容发送到BrowserWindow中
    var ret = {}
    ret["readyState"] = xhr["readyState"];
    ret["response"] = xhr["response"];
    ret["responseURL"] = xhr["responseURL"];
    ret["responseText"] = xhr["responseText"];
    ret["status"] = xhr["status"];
    ret["timeout"] = xhr["timeout"];
    ipcRenderer.sendToHost(ret);
});

window.onload= function(){
    ipcRenderer.sendToHost(window.performance.getEntries());
}
