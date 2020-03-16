import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tables from './views/Tables.vue';
import Entrainement from './views/Entrainement.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/tables', name: 'tables', component: Tables },
    { path: '/entrainement', name: 'entrainement', component: Entrainement },
  ]
});