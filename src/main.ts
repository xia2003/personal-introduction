import { createApp } from "vue";
import App from "./App.vue";
import i18n from "@/i18n";
import "./assets/index.css";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(i18n);
app.use(ElementPlus);
app.mount("#app");
