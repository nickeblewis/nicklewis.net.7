export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/nicklewis/proj/nicklewis.net/src/templates/Tag.vue")
  },
  {
    path: "/:section/:sub/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nicklewis/proj/nicklewis.net/src/templates/Post.vue")
  },
  {
    path: "/:section/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/nicklewis/proj/nicklewis.net/src/templates/Post.vue")
  },
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/nicklewis/proj/nicklewis.net/src/pages/success.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/nicklewis/proj/nicklewis.net/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/nicklewis/proj/nicklewis.net/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/nicklewis/proj/nicklewis.net/src/pages/404.vue")
  }
]

