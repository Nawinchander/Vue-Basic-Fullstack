import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './Router';
import App from './App.vue';

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app');



// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
