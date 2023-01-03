import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "@/assets/css/main.scss"

const app = createApp(App);

// import all common components
import components from "@/components/common/index.js";
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(PrimeVue).use(ToastService).mount("#app");
