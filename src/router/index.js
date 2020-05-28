import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "../store";
import auth from "./middlewares/auth";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/cabinet',
    name: 'cabinet',
    component: () => import('../views/Cabinet.vue'),
    meta: {
      middleware: [
        auth
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router
