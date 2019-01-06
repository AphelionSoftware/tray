import Vue from 'vue'
import Router from 'vue-router'

// Components
import Popup from '@/components/views/Popup'
import Option from '@/components/views/Option'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/option',
      name: 'Option',
      component: Option
    }
  ]
})
