import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import routes from "./routes";
import './assets/tailwind.css';
import { store } from '../src/store/store';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
