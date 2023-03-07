<script setup>
const props = defineProps({
  header: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <h1 v-if="header">{{ header }}</h1>
  <p class="text__paragraph text__paragraph--2-columns">
    <slot></slot>
  </p>
</template>

<style scoped lang="scss">
.text {
  &__paragraph {
    &--2-columns {
      column-count: 2;
      @media (max-width: $screen-md-max) {
        column-count: 1;
      }
    }
  }
}
</style>
