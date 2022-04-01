import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
//module.exports = { publicPath: process.env.NODE_ENV === 'production'  ? '' : ''
new Vue({
 // router,
 // store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
