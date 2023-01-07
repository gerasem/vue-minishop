import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "@/assets/css/main.scss";
import { setupI18n } from "./i18n";
import { setupRouter } from "./router";

const app = createApp(App);
app.config.devtools = true

const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  //   missingWarn: false,
  locale: import.meta.env.VUE_APP_I18N_LOCALE || "de",
  fallbackLocale: import.meta.env.VUE_APP_I18N_LOCALE || "de",
});

const router = setupRouter(i18n);
// import all common components
import uiComponents from "@/components/common/index.js";
uiComponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(PrimeVue).use(ToastService).use(router).use(i18n).mount("#app");
