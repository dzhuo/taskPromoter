
const taskRouter = {
  path: '/task',
  name: 'task-page',
  component: require('@/components/TaskPage/TaskIndex').default,
  children: [
    {
      path: '/',
      name: 'task-dashboard',
      component: require('@/components/TaskPage/Dashboard').default
    },
    {
      path: '/task/dashboard',
      name: 'task-dashboard',
      component: require('@/components/TaskPage/Dashboard').default
    },
    {
      path: '/task/taskList',
      name: 'task-List',
      component: require('@/components/TaskPage/TaskList').default
    },
    {
      path: '/task/projectList',
      name: 'project-List',
      component: require('@/components/TaskPage/ProjectList').default
    },
    {
      path: '/task/testList',
      name: 'test-List',
      component: require('@/components/TaskPage/TestPage/TestIndex').default
    }
  ]
}
export default taskRouter