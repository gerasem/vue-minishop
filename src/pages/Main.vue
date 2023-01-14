<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import AppItem from "@/components/AppItem.vue";
import AppLoading from "@/components/AppLoading.vue";
import AppCategory from "@/components/AppCategory.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const router = useRouter();
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
  changeHeader(category);
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
const changeHeader = (title = "Highlights") => {
  if (search.value.length) {
    header.value = "Search...";
  } else {
    header.value = title;
  }
};
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
      <h1>{{ header }}</h1>

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
.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.category-leave-to,
.category-enter-active,
.v-enter-active {
  transition: all 0.3s ease;
}

.category-leave-to,
.category-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
