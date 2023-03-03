<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import AppItem from "@/components/AppItem.vue";
import AppLoading from "@/components/AppLoading.vue";
import AppCategory from "@/components/AppCategory.vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref, watch, computed } from "vue";

const router = useRouter();
const route = useRoute();
const { locale } = useI18n();
const { loading, search, items, categories, serverError, selectedCategory } =
  storeToRefs(useItemsStore());
const { getItems, getCategories } = useItemsStore();
getCategories();
getItems();

const onSelectCategory = (category) => {
  if (loading.value) return;
  if (category === selectedCategory.value) return;
  selectedCategory.value = category;
  loading.value = true;
  header.value = category;
  router.push({
    name: "category",
    params: { locale: locale.value, category: category },
  });
  getItems();
  setTimeout(() => {
    loading.value = false;
  }, 500);
};

const header = ref("Highlights");

watch(route, (newValue, oldValue) => {
  console.log("watch route", newValue.name);
  if (newValue.name === "search") {
    header.value = `Search for <strong>${search.value}</strong>`;
  } else if (newValue.name === "main") {
    header.value = "Highlights";
  } else {
    search.value = "";
  }
});

const filteredItems = computed(() => {
  if (search.value) {
    return items.value.filter((s) =>
      s.title.toLowerCase().includes(search.value.toLowerCase())
    );
  }
  return items.value;
});
</script>

<template>
  <template v-if="loading">
    <app-loading></app-loading>
  </template>

  <Transition name="category">
    <template v-if="!loading && !search">
      <div class="container-fluid mb-5">
        <div class="row g-2">
          <div
            class="col"
            v-for="category in categories"
            :key="category"
          >
            <app-category
              :category="category"
              @selectCategory="onSelectCategory"
            ></app-category>
          </div>
        </div>
      </div>
    </template>
  </Transition>

  <Transition>
    <main
      v-if="!loading"
      class="container-fluid flex-grow-1"
    >
      <p v-if="serverError">{{ serverError }}</p>
      <h1 v-html="header"></h1>

      <div class="row">
        <template
          v-for="item in filteredItems"
          :key="item.id"
        >
          <app-item :item="item"></app-item>
        </template>
        <template v-if="!filteredItems.length">
          <div class="col">Items not found</div>
        </template>
      </div>
    </main>
  </Transition>
</template>
