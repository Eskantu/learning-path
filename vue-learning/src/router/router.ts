import { createRouter, createWebHistory } from 'vue-router';
import Counter from '../Pages/Counter.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/counter',
      component: Counter
    },
    {
      path: '/todo-list',
      component: () => import('../Pages/TodoList.vue')
    }]
});