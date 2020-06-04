import Vue from 'vue'
import axios from 'axios'
import Mock from 'mockjs'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './route.js'
import ExportJsonExcel from 'js-export-excel'
import 'element-ui/lib/theme-chalk/index.css'
import element from './mock/mock'
import store from './store/store'
Vue.prototype.$axios = axios
Vue.use(Mock)
Vue.use(ExportJsonExcel)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}
).$mount('#app')
