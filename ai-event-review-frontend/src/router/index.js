import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventsView from '../views/EventsView.vue';
import ReviewsView from '../views/ReviewsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/events', component: EventsView },
  { path: '/reviews', component: ReviewsView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;