<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/store/cart";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();
const { deleteItem, decrementCount, incrementCount, changeCount } =
  useCartStore();

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

const inputError = ref(false);
const onChangeQuantity = (event) => {
  console.log(+event.target.value);
  inputError.value = +event.target.value < 1 || +event.target.value > 999;
  if (+event.target.value === 0) {
    changeCount(props.item, "");
  }
  if (+event.target.value > 999) {
    const first3Letters = event.target.value.substring(0, 3);
    changeCount(props.item, +first3Letters);
  }
  if (!inputError.value) {
    changeCount(props.item, +event.target.value);
  }
};
const onBlurQuantity = (event) => {
  console.log('VALUE', event.target.value)
  inputError.value = event.target.value === "";
};

const cartInput = ref(null);
const clickOnInput = (event) => {
  cartInput.value.select();
};
const deleteItemWithConfirm = (event, item) => {
  confirm.require({
    target: event.currentTarget,
    message: "Do you want to delete this item?",
    acceptClass: "p-button-danger",
    accept: () => {
      toast.add({
        summary: "Confirmed",
        detail: "Record deleted",
        life: 3000,
      });
      deleteItem(item);
    },
  });
};
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
        type="number"
        ref="cartInput"
        class="cart__input"
        :class="{ 'cart__input--error': inputError }"
        :value="item.count"
        @blur="onBlurQuantity($event)"
        @input="onChangeQuantity($event)"
        @click="clickOnInput()"
      />
      <ui-icon
        icon="plus-lg"
        :class="{ 'icon--disabled': item.count >= 999 }"
        @click="incrementCount(item)"
      >
      </ui-icon>
    </div>

    <ui-icon
      icon="x-lg"
      class="ms-3"
      @click="deleteItemWithConfirm($event, item)"
    >
    </ui-icon>
  </div>
</template>

<style scoped lang="scss">
.cart {
  &__input {
    &--error {
      background-color: $color-primary;
    }
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
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
