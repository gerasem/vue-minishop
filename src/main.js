import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"; //theme primevue
import "primevue/resources/primevue.min.css"; //core css primevue
import "primeicons/primeicons.css"; //icons primevue
import "@/assets/css/main.scss";
import { setupI18n } from "./i18n";
import { setupRouter } from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
app.config.devtools = true;

const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  //   missingWarn: false,
  locale: "de",
  fallbackLocale: "de",
});

const router = setupRouter(i18n);
// import all common components
import uiComponents from "@/components/common/index.js";
uiComponents.forEach((component) => {
  app.component(component.name, component);
});

app
  .use(createPinia())
  .use(PrimeVue)
  .use(ToastService)
  .use(router)
  .use(i18n)
  .mount("#app");
