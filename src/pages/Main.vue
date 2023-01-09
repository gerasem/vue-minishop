<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import vItem from "@/components/vItem.vue";
const { loading, search, items, serverError } = storeToRefs(useItemsStore());
const { fetchAll } = useItemsStore();
fetchAll();
</script>

<template>
  <p v-if="serverError">{{ serverError }}</p>
  <main class="container-fluid flex-grow-1">
    <h1>Main</h1>

    <div class="row">
      <template
        v-for="item in items"
        :key="item.id"
      >
        <v-item :item="item"></v-item>
      </template>
      <template v-if="!items.length">
        <div class="col">Items not found</div>
      </template>
    </div>
  </main>
</template>
