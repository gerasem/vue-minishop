import { createRouter, createWebHistory } from "vue-router";
import { setI18nLanguage, loadLocaleMessages, SUPPORT_LOCALES } from "@/i18n";
import Main from "@/pages/Main.vue";

function load(component) {
  return () => import(/* @vite-ignore */ `../pages/${component}.vue`);
}

export function setupRouter(i18n) {
  const locale = i18n.global.locale.value;

  // setup routes
  const routes = [
    {
      path: "/:locale?/",
      component: {
        template: "<router-view></router-view>",
      },
      children: [
        {
          path: "",
          name: "main",
          component: Main,
        },
        {
          path: "cart",
          name: "cart",
          component: load("Cart"),
        },
        {
          path: "search",
          name: "search",
          component: Main,
        },
        {
          path: "category/:category?",
          name: "category",
          component: Main,
        },
        {
          path: "item/:id?",
          name: "item",
          component: load("Item"),
        },
        {
          path: "contact",
          name: "contact",
          component: load("Contact"),
        },
        {
          path: ":pathMatch(.*)*",
          name: "NotFound",
          component: load("404"),
        },
      ],
    },
  ];

  // create router instance
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  // navigation guards
  router.beforeEach(async (to) => {
    const paramsLocale = to.params.locale;
    // use locale if paramsLocale is not in SUPPORT_LOCALES
    if (!SUPPORT_LOCALES.includes(paramsLocale)) {
      return `/${locale}`;
    }

    await loadLocaleMessages(i18n, paramsLocale);

    // set i18n language
    setI18nLanguage(i18n, paramsLocale);
  });

  return router;
}
