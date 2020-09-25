import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import BootstrapVue from 'bootstrap-vue'
import '../src/assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAdAuzIBEpOmMeX_g8yRYwEoHOKpjX9qsQ",
    libraries: "places" // necessary for places input
  }
});
Vue.use(VueCarousel)
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
