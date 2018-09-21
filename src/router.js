import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Account from './views/Account.vue';
import Contracts from './views/Contracts.vue';
import Contacts from './views/Contacts.vue';
import Preview from './views/Preview.vue';

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
		{
			path: '/contacts',
			name: 'contacts',
			component: Contacts,
		},
		{
			path: '/preview',
			name: 'preview',
			component: Preview,
		},
  ],
});
