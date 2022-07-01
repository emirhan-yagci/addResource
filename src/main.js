import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import listResource from "./components/RESOURCE/listResource.vue";
import addResource from "./components/RESOURCE/addResource.vue";

app.component("list-resource",listResource);
app.component("add-resource",addResource);

app.mount('#app')
