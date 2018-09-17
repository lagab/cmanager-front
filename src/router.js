import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Account from './views/Account.vue';
import Contracts from './views/Contracts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
    },
		{
			path: '/contracts',
			name: 'contracts',
			component: Contracts,
		},
  ],
});
