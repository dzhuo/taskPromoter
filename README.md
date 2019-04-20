# TaskPromoter

> An electron-vue project 

#### Build Setup

``` bash
# 安装依赖
cnpm install
#编译 sqlite3
安装vs2015 选择自定义安装并安装c++编译器（将编译器加入环境变量）

安装Python 2.7或者cnpm install --global --production windows-build-tools

cnpm install -g node-gyp

cd node_modules/sqlite3

node-gyp configure --module_name=node_sqlite3 --module_path=../lib/binding/electron-v2.0-win32-x64

node-gyp rebuild --target=2.0.5 --arch=x64 --target_platform=win32 --dist-url=https://atom.io/download/electron 
--module_name=node_sqlite3  --module_path=../lib/binding/electron-v2.0-win32-x64 --runtime=electron

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
