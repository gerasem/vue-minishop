<script setup>
import { computed } from "vue";
import { useCartStore } from "@/store/cart";
const { deleteItem, decrementCount, incrementCount } = useCartStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const getSale = computed(() => {
  if (!props.item.old_price) return;
  return ((props.item.price / props.item.old_price - 1) * 100).toFixed(0);
});
</script>

<template>
  <div class="cart__item">
    <router-link :to="item.slug ?? item">
      <div class="cart__image-container">
        <img
          :src="item.image"
          :alt="item.title"
          class="cart__image"
        />
      </div>
    </router-link>
    <div class="cart__main">
      <div class="cart__prices">
        <div class="cart__price">{{ item.price }}€</div>
        <div
          class="cart__old-price"
          v-if="item.old_price"
        >
          {{ item.old_price }}€
        </div>
        <div
          class="cart__discount"
          v-if="getSale"
        >
          {{ getSale }}%
        </div>
      </div>
      <h4 class="cart__title">{{ item.title }}</h4>
    </div>
    <div class="cart__actions">
      <ui-icon
        icon="dash-lg"
        :class="{ 'icon--disabled': item.count <= 1 }"
        @click="decrementCount(item)"
      >
      </ui-icon>

      <input
        type="text"
        class="cart__input"
        :value="getItemCount"
        @blur="onBlurQuantity($event)"
        @input="onChangeQuantity($event)"
      />

      <ui-icon
        icon="plus-lg"
        :class="{ 'icon--disabled': item.count >= $options.maxCount }"
        @click="incrementCount(item)"
      >
      </ui-icon>
    </div>

    <ui-icon
      icon="x-lg"
      class="ms-3"
      @click="deleteItem(item)"
    >
    </ui-icon>
  </div>
</template>

<script>
export default {
  computed: {
    getItemCount() {
      if (!isFinite(this.item.count)) {
        this.item.count = 1;
        this.$toast.add({ summary: "only digits", life: 3000, group: "error" });
      }
      if (this.item.count > this.$options.maxCount) {
        this.item.count = this.$options.maxCount;
        this.$toast.add({
          summary: "More than 999",
          life: 3000,
          group: "error",
        });
      }
      return this.item.count;
    },
  },

  methods: {
    onChangeQuantity(event) {
      let changedQuantity = +event.target.value;

      if (changedQuantity < 0) {
        changedQuantity = 1;
      }

      this.$store.dispatch("changeQuantityOfItem", {
        id: this.item.id,
        count: changedQuantity,
      });
    },

    onBlurQuantity(event) {
      let changedQuantity = +event.target.value;
      if (changedQuantity === 0) {
        changedQuantity = 1;
      }

      this.$store.dispatch("changeQuantityOfItem", {
        id: this.item.id,
        count: changedQuantity,
      });
    },

    // incrementCount() {
    //   if (this.item.count >= this.$options.maxCount) {
    //     //todo add toast message
    //     return;
    //   }
    //   this.item.count++;
    //   this.$store.dispatch("changeQuantityOfItem", {
    //     id: this.item.id,
    //     count: this.item.count,
    //   });
    // },

    // decrementCount() {
    //   if (this.item.count <= 1) {
    //     //todo add toast message
    //     return;
    //   }
    //   this.item.count--;
    //   this.$store.dispatch("changeQuantityOfItem", {
    //     id: this.item.id,
    //     count: this.item.count,
    //   });
    // },
  },

  maxCount: 999,
};
</script>

<style scoped lang="scss">
.cart {
  &__item {
    display: flex;
    align-items: center;
    padding: 1rem 1rem 1rem 0;
    position: relative;

    &:not(:last-of-type):after {
      position: absolute;
      content: "";
      width: calc(100% - 2rem);
      left: 1rem;
      bottom: 0;
      height: 1px;
      background: $color-separator;
    }
  }

  &__image-container {
    overflow: hidden;
  }

  &__image {
    width: 200px;
    height: 150px;
    object-fit: cover;
    display: block;
    background-color: $background-gray;
    clip-path: $clip-path;
    transition: 0.2s;
    --pol-a: 10px;
    --pol-b: calc(100% - var(--pol-a));

    @media (max-width: $screen-lg-max) {
      width: 130px;
      height: 100px;
    }

    @media (max-width: $screen-md-max) {
      width: 100px;
      height: 75px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  &__button {
    cursor: pointer;
    margin-top: 2rem;
  }

  &__main {
    flex: 1;
    margin: 0 2rem;
  }

  &__prices {
    display: flex;
  }

  &__price {
    font-size: 1.125rem;
    font-weight: 600;
  }

  &__old-price {
    text-decoration: line-through;
    margin: 0 2rem;
  }

  &__discount {
    color: $color-primary;
  }

  &__title {
    font-size: 1rem;
  }

  &__actions {
    display: flex;
  }

  &__input {
    border: none;
    text-align: center;
    max-width: 3rem;
  }
}
</style>
