import { createApp } from 'vue';
import './assets/tailwind.css';
import App from './App.vue';
import router from './router'; // นำเข้า router ที่เราสร้างขึ้น

createApp(App)
    .use(router) // ใช้ router ในแอป
    .mount('#app')

