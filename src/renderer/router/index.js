import Vue from 'vue'
import Router from 'vue-router'
import TaskRouter from './task.js'

Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      children: [
        {
          path: '/',
          name: 'index-page',
          component: require('@/components/IndexPage').default
        },
        TaskRouter
        ,
        {
          path: '/script',
          name: 'scriptInde-page',
          component: require('@/components/ScriptPage/ScriptIndex').default
        },
        {
          path: '/note',
          name: 'note-page',
          component: require('@/components/NotePage/NoteIndex').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router;