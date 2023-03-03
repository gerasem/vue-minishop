<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import { useCartStore } from "@/store/cart";
import AppLoading from "@/components/AppLoading.vue";
import CartItem from "@/components/CartItem.vue";
import { ref, watch, computed } from "vue";
import Dialog from "primevue/dialog";

const { loading, search, items, serverError } = storeToRefs(useItemsStore());
const { getItems } = useItemsStore();
getItems();

const { cartList, deleteCart } = storeToRefs(useCartStore());
const couponCode = ref("");
const displayConfirmDialog = ref(false);

const fullCart = computed(() => {
  if (!loading.value) {
    const result = [];
    cartList.value.forEach((item) => {
      const foundedItem = items.value.find((i) => i.id === item.id);
      result.push({ ...item, ...foundedItem });
    });
    return result;
  } else {
    return [];
  }
});

const totalPrice = computed(() => {
  if (loading.value) return;
  return fullCart.value
    .map((item) => item.price)
    .reduce((pr, num) => pr + num, 0);
});

const subTotal = computed(() => {
  if (loading.value) return;
  return fullCart.value
    .map((item) => item.price)
    .reduce((pr, num) => pr + num, 0);
});

const freeShipping = computed(() => {
  if (loading.value) return;
  return subTotal >= 50;
});
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
      <h1>Cart</h1>

      <template v-if="fullCart.length">
        <div class="row">
          <div class="col-lg-8">
            <template
              v-for="item in fullCart"
              :key="item.title"
            >
              <cart-item :item="item"> </cart-item>
            </template>
          </div>
          <div class="col-lg-4">
            <div class="cart__form">
              <div class="cart__info">Free shipping from 50€</div>
              <div class="cart__form-container">
                <div class="text-center">
                  <div class="row">
                    <div class="col text-end">Sub-Total:</div>
                    <div class="col text-start">
                      <span class="cart__form-price"
                        >{{
                          subTotal > 1
                            ? subTotal.toFixed(2)
                            : subTotal.toPrecision(2)
                        }}€</span
                      >
                    </div>
                  </div>

                  <div class="row">
                    <div class="col text-end">Shipping:</div>
                    <div class="col text-start">
                      <span class="cart__form-price">
                        {{ freeShipping ? "Free" : "50€" }}
                      </span>
                    </div>
                  </div>

                  <div
                    class="row"
                    v-if="false"
                  >
                    <div class="col text-end cart__form-price--discount">
                      Discount:
                    </div>
                    <div class="col text-start">
                      <span class="cart__form-price cart__form-price--discount">
                        {{ couponValue }} {{ couponType }}
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col text-end fw-bold">Total price:</div>
                    <div class="col text-start">
                      <span class="cart__form-price cart__form-price--total">
                        {{
                          totalPrice > 1
                            ? totalPrice.toFixed(2)
                            : totalPrice.toPrecision(2)
                        }}€
                      </span>
                    </div>
                  </div>

                  <div class="row text-start">
                    <div class="col">
                      <ui-input
                        v-model="couponCode"
                        placeholder="Coupon code"
                        icon="ticket"
                        description="For example: <strong>test</strong> or <strong>abc</strong>"
                      ></ui-input>
                    </div>
                  </div>

                  <div class="row text-start">
                    <div class="col">
                      <ui-button
                        v-show="fullCart.length"
                        class="btn-primary"
                        icon="bag-check"
                      >
                        Buy
                      </ui-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <p>Shopping cart is empty</p>
      </template>

      <ui-button
        v-show="fullCart.length"
        @clickOnButton="openConfirmation()"
        class="btn-outline-primary"
        icon="trash"
      >
        Delete cart
      </ui-button>

      <Dialog
        header="are you sure?"
        v-model:visible="displayConfirmDialog"
        :modal="true"
        :dismissableMask="true"
      >
        <div class="confirmation-content">
          <span>Are you sure you want to proceed?</span>
        </div>
        <template #footer>
          <ui-button
            icon="x-lg"
            @click="closeConfirmation()"
            class="btn-outline-secondary"
          >
            No
          </ui-button>
          <ui-button
            icon="check-lg"
            @click="deleteCart()"
            class="btn-outline-primary"
            autofocus
          >
            Yes
          </ui-button>
        </template>
      </Dialog>
    </main>
  </Transition>
</template>

<style lang="scss" scoped>
.cart {
  &__form {
    position: sticky;
    top: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    @media (max-width: $screen-lg-max) {
      margin: 2rem 0;
    }
  }

  &__form-container {
    padding: 1.5rem;
  }

  &__form-price {
    font-weight: 600;

    &--total {
      color: $color-secondary;
    }

    &--discount {
      color: $color-primary;
    }
  }

  &__info {
    background-color: rgb(255, 249, 241);
    padding: 1rem 1.5rem;
    text-align: center;
    color: $color-secondary;
    font-weight: 600;
  }
}
</style>
