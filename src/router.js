import { createWebHistory, createRouter } from "vue-router";

import Login from './components/screens/auth/Login'
import Register from './components/screens/auth/Register'
import Logout from './components/screens/auth/Logout'
import home from './components/Home.vue'

import ShowSingleOrder from './components/screens/products/show.vue'
import ShowMyOrders from './components/screens/orders/MyOrders.vue'

const routes = [
  {
    path: "/ods/",
    name: "home",
    component: home,
  },
  {
    path: "/ods/login",
    name: 'login',
    component: Login,
  },
  {
    path: "/ods/register",
    name: "register",
    component: Register,
  },
  {
      path:"/ods/logout",
      name:"logout",
      component:Logout
  },
  {
    path: "/ods/product/show/:id",
    name: "single-order",
    component: ShowSingleOrder,
  },
  {
    path: "/ods/myorders",
    name: "myorders",
    component: ShowMyOrders,
  },

 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  
});

export default router;