import { nextTick } from "vue";
import { createI18n } from "vue-i18n";

export const SUPPORT_LOCALES = ["en", "de"];

function checkDefaultLanguage() {
  let matched = null;

  SUPPORT_LOCALES.forEach((lang) => {
    if (lang === navigator.language) {
      matched = lang;
    }
  });
  if (!matched) {
    SUPPORT_LOCALES.forEach((lang) => {
      let languagePartials = navigator.language.split("-")[0];
      if (lang === languagePartials) {
        matched = lang;
      }
    });
  }
  return matched || import.meta.env.VUE_APP_I18N_LOCALE || "de";
}

export function setupI18n(options = { locale: checkDefaultLanguage() }) {
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);
  return i18n;
}

export function setI18nLanguage(i18n, locale) {
  i18n.global.locale.value = locale;
  document.querySelector("html").setAttribute("lang", locale);
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(/* @vite-ignore */ `./locales/${locale}.json`);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}
