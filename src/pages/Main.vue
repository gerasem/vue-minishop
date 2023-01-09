<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";

const { loading, search, items, serverError } = storeToRefs(useItemsStore());
const { fetchAll } = useItemsStore();

fetchAll();
</script>

<template>
  <p>Main page</p>
  <p v-if="serverError">{{ serverError }}</p>
  <pre>
    {{ items }}
  </pre>
</template>
