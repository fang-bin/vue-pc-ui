import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');
const tree = r => require.ensure([], () => r(require('../page/tree/tree.vue')), 'tree');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/tree',
      name: 'tree',
      component: tree
    }
  ]
})
