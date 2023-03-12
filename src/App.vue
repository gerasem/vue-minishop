<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { watch, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
// import { SUPPORT_LOCALES } from "./i18n";
import Toast from "primevue/toast";
import { useCartStore } from "@/store/cart";

const router = useRouter();
const { t, locale } = useI18n({ useScope: "global" });
/**
 * select locale value for language select form
 *
 * If you use the vue-i18n composer `locale` property directly, it will be re-rendering component when this property is changed,
 * before dynamic import was used to asynchronously load and apply locale messages
 * To avoid this, use the another locale reactive value.
 */
const currentLocale = ref(locale.value);
// sync to switch locale from router locale path
watch(router.currentRoute, (route) => {
  currentLocale.value = route.params.locale;
});

const { initShoppingCart } = useCartStore();
initShoppingCart();
</script>

<template>
  <app-header> </app-header>

  <Toast
    position="top-right"
    group="cart"
  >
    <template #message="slotProps">
      <div class="flex-fill me-2">
        {{ slotProps.message.summary }}
        <router-link
          :to="{ name: 'cart', params: { locale: $i18n.locale } }"
          class="ms-1"
        >
          Go to shopping cart
        </router-link>
      </div>
    </template>
  </Toast>

  <Toast
    position="top-right"
    group="error"
    class="error-message"
  >
    <template #message="slotProps">
      <div class="flex-fill me-2">
        {{ slotProps.message.summary }}
      </div>
    </template>
  </Toast>

  <Toast position="top-right">
    <template #message="slotProps">
      <div class="flex-fill me-2">
        <strong class="me-2">{{ slotProps.message.summary }}</strong>
        {{ slotProps.message.detail }}
      </div>
    </template>
  </Toast>

  <router-view />

  <app-footer></app-footer>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
