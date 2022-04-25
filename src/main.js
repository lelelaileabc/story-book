import { createApp } from 'vue'
import App from './App.vue'

import "./styles/main.css"; // Make sure this line is added so Tailwind will be globally available in your Vue components

createApp(App).mount('#app')