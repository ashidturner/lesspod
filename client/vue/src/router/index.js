import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Newpost from '@/components/Newpost'
import Editpost from '@/components/Editpost'
import Viewpost from '@/components/Viewpost'
import Posts from '@/components/Posts'
import Page from '@/components/Page'
import Profile from '@/components/Profile'
import Settings from '@/components/Settings'

Vue.use(Router)
Vue.use(require('vue-moment'));
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/newpost',
      name: 'Newpost',
      component: Newpost
    },
    {
      path: '/editpost/:post_id',
      name: 'Editpost',
      component: Editpost
    },
    {
      path: '/post/:post_id',
      name: 'Viewpost',
      component: Viewpost
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Posts
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/:page',
      name: 'Page',
      component: Page
    }
  ]
})
