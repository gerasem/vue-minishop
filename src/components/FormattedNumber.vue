<script setup>
import gsap from "gsap";
import { ref, computed, watch, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { LOCALE_NAMES } from "@/i18n";

const { t, locale } = useI18n({ useScope: "global" });

const props = defineProps({
  number: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    default: "PRICE",
  },
});

const num = reactive({
  number: props.number || 0,
});

const formatePrice = (price) => {
  return new Intl.NumberFormat(LOCALE_NAMES[locale.value], {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

watch(
  () => props.number,
  (n) => {
    gsap.to(num, { duration: 0.5, number: Number(n) || 0 });
  }
);
</script>

<template>
  <template v-if="props.type === 'PRICE'">
    {{ formatePrice(num.number) }}
  </template>

  <template v-else-if="props.type === 'COUNT'">
    {{ num.number.toFixed() }}
  </template>
</template>

<style scoped lang="scss"></style>
