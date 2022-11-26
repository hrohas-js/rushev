import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import VueWebpImage from 'vue-webp-image'
import router from './router'
import store from './store'
import components from '@/components/UI';
const app = createApp(App);

for(let elem in components){
    app.component(components[elem].name, components[elem])
}

app.use(store).use(router).use(VueLazyLoad).use(VueWebpImage).mount('#app')
