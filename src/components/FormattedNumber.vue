<script setup>
import gsap from "gsap";
import { ref, computed, watch, reactive } from "vue";

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
  return price.toFixed(2) + " €";
};

watch(
  () => props.number,
  (n) => {
    console.log("watch", n, num);
    gsap.to(num, { duration: 0.5, number: Number(n) || 0 });
  }
);
</script>

<template>
  {{ formatePrice(num.number) }}
</template>

<style scoped lang="scss"></style>
