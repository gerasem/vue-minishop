<script setup>
import { computed, onUnmounted } from "vue";
import imagePlaceholder from "@/assets/images/320x240.png";
import { useCartStore } from "@/store/cart";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

const toast = useToast();
const { addItemToCart } = useCartStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const addToCart = (item) => {
  addItemToCart(item);
  toast.add({
    summary: "Item added to shopping cart",
    life: 3000,
    group: "cart",
  });
};

const getSale = computed(() => {
  if (!props.item.old_price) return;
  return ((props.item.price / props.item.old_price - 1) * 100).toFixed(0);
});

onUnmounted(() => {
  toast.removeGroup("cart");
});
</script>

<template>
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="item">
      <router-link
        :to="{ name: 'item', params: { locale: $i18n.locale, id: item.id } }"
      >
        <div class="item__image-container">
          <img
            :src="item.image ?? imagePlaceholder"
            :alt="item.title"
            class="img-fluid item__image"
          />
        </div>
      </router-link>

      <div class="item__description">
        <div class="item__price">{{ item.price }}€</div>
        <div
          class="item__old-price"
          v-if="item.old_price"
        >
          {{ item.old_price }}€
        </div>
        <div
          class="item__discount"
          v-if="getSale"
        >
          {{ getSale }}%
        </div>
        <ui-icon
          icon="bag-plus"
          @click="addToCart(item)"
        >
        </ui-icon>
      </div>
      <h3 class="item__title">{{ item.title }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  text-decoration: none;
  margin: 25px 0 15px;
  display: block;
  color: $color-text;

  &__image-container {
    overflow: hidden;
  }

  &__image {
    width: 100%;
    clip-path: $clip-path;
    transition: 0.2s;
    height: 260px;
    object-fit: contain;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }

  &__description {
    display: flex;
    flex-direction: row;
    margin: 12px 15px 0;
    font-size: 1rem;
    justify-content: space-between;
  }

  &__price {
    font-weight: 700;
    font-size: 1.125rem;
  }

  &__old-price {
    text-decoration: line-through;
  }

  &__discount {
    color: $color-primary;
  }

  &__title {
    margin: 0 15px;
  }
}
</style>
