import VueRouter from 'vue-router'
import Index from '@/views/Home/index.vue'
const router = new VueRouter({
  routes: [{
    path: '/',
    component: Index,
    alias: '/home'
  },
  {
    path: '/about',
    component: () => require('@/views/About/index.vue')
  }
  ]

})

export default router