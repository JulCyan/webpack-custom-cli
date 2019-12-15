import VueRouter from 'vue-router'
import Index from '@/views/Home/index.vue'
import About from '@/views/About/index.vue'
import TSTest from '@/views/TSTest/index.vue'
const router = new VueRouter({
  routes: [{
    path: '/',
    component: Index,
    alias: '/home'
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/test',
    component: TSTest
  }
  ]
})

export default router