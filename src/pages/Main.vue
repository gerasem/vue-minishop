<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import AppItem from "@/components/AppItem.vue";
import AppLoading from "@/components/AppLoading.vue";
const { loading, search, items, serverError } = storeToRefs(useItemsStore());
const { getHighlights } = useItemsStore();
getHighlights();
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

      <h1>Highlights</h1>

      <div class="row">
        <template
          v-for="item in items"
          :key="item.id"
        >
          <app-item :item="item"></app-item>
        </template>
        <template v-if="!items.length">
          <div class="col">Items not found</div>
        </template>
      </div>
    </main>
  </Transition>
</template>

<style scoped lang="scss">
.v-enter-active {
  transition: all 0.3s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>
