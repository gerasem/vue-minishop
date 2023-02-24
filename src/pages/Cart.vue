<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import AppLoading from "@/components/AppLoading.vue";
import { ref, watch, computed } from "vue";
const { loading, search, items, categories, serverError, selectedCategory } =
  storeToRefs(useItemsStore());
const { getItems } = useItemsStore();
getItems();
</script>

<template>
  <template v-if="loading">
    <app-loading></app-loading>
  </template>

  <Transition>
    <main
      v-if="!loading"
      class="container-fluid flex-grow-1"
    >
      <p v-if="serverError">{{ serverError }}</p>
      <h1>Cart</h1>

      
    </main>
  </Transition>
</template>

<style lang="scss" scoped>
.cart {
  &__form {
    position: sticky;
    top: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    @media (max-width: $screen-lg-max) {
      margin: 2rem 0;
    }
  }

  &__form-container {
    padding: 1.5rem;
  }

  &__form-price {
    font-weight: 600;

    &--total {
      color: $color-secondary;
    }

    &--discount {
      color: $color-primary;
    }
  }

  &__info {
    background-color: rgb(255, 249, 241);
    padding: 1rem 1.5rem;
    text-align: center;
    color: $color-secondary;
    font-weight: 600;
  }
}
</style>
