
const taskRouter = {
  path: '/task',
  name: 'task-page',
  component: require('@/components/TaskPage/TaskIndex').default,
  children: [
    {
      path: '/task/',
      name: 'working-task',
      component: require('@/components/TaskPage/TaskIndex').default
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
    }
  ]
}
export default taskRouter