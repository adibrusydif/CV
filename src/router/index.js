import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from '@/App'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  mode:'history',
  routes: [
    { path: '/about', name: 'About', component: About, meta:{title:'Adib :)'} },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio, meta:{title:'Portfolio | Adib :)'} },
    { path: '/contact', name: 'Contact', component: Contact, meta:{title:'Contact me | Adib :)'} },
    { path: '/', redirect:'/about' },
  ]
})

router.afterEach(route => {
	document.title = route.meta.title;
})

export default router
