import Vue from 'vue';
import VueRouter from 'vue-router';
import Feed from '../views/client/Feed.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: Feed,
  },
  {
    path: '/example',
    name: 'ExampleView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExampleView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
