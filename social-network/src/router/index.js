import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/client/Home';


// Containers
// const DefaultContainer = () => import('../components/containers/DefaultContainer')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {   
            path: '/',
            name: 'Home',
            component: Home,
        }
    ]
})
