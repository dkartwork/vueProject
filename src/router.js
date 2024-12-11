// src/router.js

import { createRouter, createWebHistory } from 'vue-router';

// นำเข้าคอมโพเนนต์ที่เราต้องการจะนำทาง
import HomePage from './components/Home.vue';
import AboutPage from './components/About.vue';
import NotFound from './components/NotFound.vue';
import JSONAPI from './components/Json_api.vue';
import REGIS from './components/FormRegis.vue';

// กำหนด Routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // เมื่อไปที่ path '/' จะไปที่คอมโพเนนต์ Home.vue
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage, // เมื่อไปที่ path '/about' จะไปที่คอมโพเนนต์ About.vue
  },
  {
    path: '/api',
    name: 'Json_api',
    component: JSONAPI,
  },
  {
    path: '/regis',
    name: 'FormRegis',
    component: REGIS,
  },
  {
    path: '/:catchAll(.*)', // สำหรับหน้าผิดพลาด 404
    name: 'NotFound',
    component: NotFound,
  },
];

// สร้าง Router
const router = createRouter({
  history: createWebHistory(), // ใช้ history API เพื่อการเปลี่ยนหน้าแบบไม่โหลดหน้าใหม่
  routes, // กำหนด routes ที่สร้างขึ้น
});

export default router;
