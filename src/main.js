import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import * as carousel from "vue3-carousel";

const app = createApp(App);
app.use(carousel)
app.use(store);
app.mount("#app");
