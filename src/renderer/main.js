import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import db from './data/datastore'
import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import '../theme/common.less'
Vue.use(iView);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.db = Vue.prototype.$db = db
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
