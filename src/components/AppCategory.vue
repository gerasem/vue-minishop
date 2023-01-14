<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import imagePlaceholder from "@/assets/images/320x240.png";
const { selectedCategory } = storeToRefs(useItemsStore());

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const emit = defineEmits({ selectCategory: null });

const handleSelectCategory = (category) => {
  emit("selectCategory", category);
  selectedCategory.value = category;
};

const getCategoryClass = (category) => {
  if (!selectedCategory.value) return;
  if (category === selectedCategory.value) return "active";
  return "category--opacity";
};
</script>

<template>
  <div
    @click="handleSelectCategory(category)"
    class="category"
    :class="getCategoryClass(category)"
  >
    <div class="category__image-container">
      <img
        class="img-fluid category__image"
        :src="imagePlaceholder"
        :alt="category"
      />
    </div>
    <h3 class="category__title">{{ category }}</h3>
  </div>
</template>

<style scoped lang="scss">
.category {
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:focus,
  &.active {
    opacity: 1;

    .category__title {
      color: $color-secondary;
    }

    .category__image {
      transform: scale(1.1);
    }
  }

  &.active {
    .category__image-container {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    }
  }

  &__image-container {
    overflow: hidden;
    transition: 0.2s;
    @media (max-width: $screen-md-max) {
      min-width: 200px;
    }
    @media (max-width: $screen-sm-max) {
      min-width: 100px;
    }
  }

  &__image {
    width: 100%;
    clip-path: $clip-path;
    transition: 0.2s;
  }

  &__title {
    text-align: center;
    transition: 0.2s;
    color: $color-text;
  }

  &--opacity {
    opacity: 0.5;
  }
}

.category-leave-to,
.category-enter-active {
  transition: all 0.3s ease;
}

.category-leave-to,
.category-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
