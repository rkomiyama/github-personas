import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import jquery from 'jquery';

window.$ = jquery;
window.JQuery = jquery;

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
