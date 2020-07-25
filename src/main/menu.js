const electron = require('electron')
/*获取electron窗体的菜单栏*/
const Menu = electron.Menu
/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null)