const ipcMain = require('electron').ipcMain;
ipcMain.on('asynchronous-message', function(event, arg) {
  console.log(arg);  
//回应异步消息, 你可以使用 event.sender.send(...).
  event.sender.send('asynchronous-reply', '异步消息');
});

ipcMain.on('synchronous-message', function(event, arg) {
  console.log(arg);  
  //回应同步消息, 你可以设置 event.returnValue.
  event.returnValue = '同步消息';
});