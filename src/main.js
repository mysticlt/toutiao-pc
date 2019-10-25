import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// isMainThread.js 职责是入口文件
// 职责1：创建根实例
// 职责2：依赖项目需要全局的资源
