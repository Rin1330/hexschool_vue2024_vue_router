import './assets/all.scss'

// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import LoadingPlugin from 'vue-loading-overlay';
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(LoadingPlugin);
// app.component('LoadingOverRay', LoadingPlugin)

app.mount('#app')
