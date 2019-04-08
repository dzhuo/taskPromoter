import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
        {
          path: '/task',
          name: 'task-page',
          component: require('@/components/TaskPage/TaskIndex').default,
          children: [
            {
              path: '/task/',
              name: 'working-task',
              component: require('@/components/TaskPage/Dashboard').default
            },
            {
              path: '/task/working',
              name: 'working-task',
              component: require('@/components/TaskPage/WorkingTask').default
            },
            {
              path: '/task/waiting',
              name: 'waiting-task',
              component: require('@/components/TaskPage/WaitingTask').default
            },
            {
              path: '/task/finish',
              name: 'finish-task',
              component: require('@/components/TaskPage/FinishTask').default
            }
          ]
        },
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
