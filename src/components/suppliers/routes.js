import Index from './Index.vue';
import Create from './Create.vue';

const routes = [
  { path: '/suppliers', component: Index },
  { path: '/suppliers/create', component: Create }
];

export default routes;