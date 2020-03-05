import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/client/Welcome.vue';
import Feed from '../views/client/Feed.vue';
import notFound from '../views/client/404.vue';
import Messages from '../views/client/Messages.vue';
import Friends from '../views/client/Friends.vue';
import Profile from '../views/client/Profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/Feeds',
    name: 'Feeds',
    component: Feed,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
  {
    path: '/messages/:sender',
    name: 'Messages',
    props: true,
    component: Messages,
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends,
  },
  {
    path: '/profile/:user',
    name: 'Profile',
    props: true,
    component: Profile,
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound,
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
