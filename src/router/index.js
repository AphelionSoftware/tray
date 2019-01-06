import Vue from 'vue'
import Router from 'vue-router'

// Components
import Popup from '@/components/views/Popup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Popup',
      component: Popup
    }
  ]
})