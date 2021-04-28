import { createApp } from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import  { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})
const app = createApp(App);
app.use(router);
app.use(Vuelidate);
app.mount("#app");
