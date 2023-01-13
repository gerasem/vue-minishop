<script setup>
import imagePlaceholder from "@/assets/images/320x240.png";
</script>

<template>
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="item">
      <router-link to="/">
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
          @click="addToCart()"
        >
        </ui-icon>
      </div>
      <h3 class="item__title">{{ item.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getSale() {
      if (!this.item.old_price) return;
      return ((this.item.price / this.item.old_price - 1) * 100).toFixed(0);
    },
  },

  methods: {
    addToCart() {
      this.$toast.add({
        summary: "Item added to shopping cart",
        life: 3000,
        group: "cart",
      });
    },
  },

  unmounted() {
    this.$toast.removeGroup("cart");
  },
};
</script>

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
