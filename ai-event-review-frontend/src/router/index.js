import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventsView from '../views/EventsView.vue';
import ReviewsView from '../views/ReviewsView.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import CalendarPage from '../components/CalendarPage.vue';
import Navbar from '../components/Navbar.vue'; 


// Only import AboutView after you've created the file
// import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    redirect: '/events'
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  /* Add this route after you've created the AboutView.vue file
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  */
  { path: '/reviews', name: 'reviews', component: ReviewsView },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/calendarpage', name: 'calendar', component: CalendarPage },
  { path: '/navbar', name: 'navbar', component: Navbar }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;