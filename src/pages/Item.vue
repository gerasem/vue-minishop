<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import AppLoading from "@/components/AppLoading.vue";
const route = useRoute();
const { getItem, getCategories } = useItemsStore();
getCategories();
getItem(route.params.id);
const {
  loading,
  search,
  selectedItem,
  categories,
  serverError,
  selectedCategory,
} = storeToRefs(useItemsStore());
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
      <h1>{{ selectedItem.title }}</h1>

      <!-- <img
        :src="selectedItem.image"
        :alt="selectedItem.title"
        style="width: 350px"
      /> -->
      <pre>{{ selectedItem }}</pre>
    </main>
  </Transition>
</template>
