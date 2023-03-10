<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import { useCartStore } from "@/store/cart";
import AppLoading from "@/components/AppLoading.vue";
import CartItem from "@/components/CartItem.vue";
import FormattedNumber from "@/components/FormattedNumber.vue";
import { ref, watch, onMounted, reactive } from "vue";
import Dialog from "primevue/dialog";
import { useToast } from "primevue/usetoast";
import ConfirmPopup from "primevue/confirmpopup";

const toast = useToast();
const { loading, serverError } = storeToRefs(useItemsStore());
const { getItems } = useItemsStore();
getItems();

const {
  fullCart,
  totalPrice,
  subTotal,
  freeShipping,
  coupon,
  couponError,
  discount,
} = storeToRefs(useCartStore());

onMounted(() => {
  couponCode.value = coupon.value.code;
});
const { checkCouponCode, deleteCart } = useCartStore();
const couponCode = ref("");
const displayConfirmDialog = ref(false);

const applyCoupon = () => {
  checkCouponCode(couponCode.value);
};

const openConfirmation = () => {
  displayConfirmDialog.value = true;
};

const closeConfirmation = () => {
  displayConfirmDialog.value = false;
};

const deleteItemsFromCart = () => {
  deleteCart();
  displayConfirmDialog.value = false;
  toast.add({
    summary: "Confirmed",
    detail: "Cart deleted",
    life: 3000,
  });
};

const disabledBuyButton = ref(false);
const cartHasErrors = (event) => {
  disabledBuyButton.value = event;
};
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
        <ConfirmPopup></ConfirmPopup>

        <div class="row">
          <div class="col-lg-8">
            <template
              v-for="item in fullCart"
              :key="item.title"
            >
              <cart-item
                :item="item"
                @cartHasErrors="cartHasErrors($event)"
              >
              </cart-item>
            </template>
          </div>
          <div class="col-lg-4">
            <div class="cart__form">
              <div
                v-if="!couponError"
                class="cart__info"
              >
                Free Shipping on all orders over 50???
              </div>
              <div
                v-else
                class="cart__info cart__info--error"
              >
                {{ couponError }}
              </div>
              <div class="cart__form-container">
                <div class="text-center">
                  <div class="row">
                    <div class="col text-end">Sub-Total:</div>
                    <div class="col text-start">
                      <span class="cart__form-price">
                        <!-- {{ subTotalAnimated.number.toFixed(2) }}??? -->
                        <formatted-number :number="subTotal"></formatted-number>
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col text-end">Shipping:</div>
                    <div class="col text-start">
                      <span class="cart__form-price">
                        {{ freeShipping ? "Free" : "5???" }}
                      </span>
                    </div>
                  </div>

                  <div
                    class="row"
                    v-if="coupon.code && !couponError"
                  >
                    <div class="col text-end cart__form-price--discount">
                      Discount ({{ coupon.value }} {{ coupon.type }}):
                    </div>
                    <div class="col text-start">
                      <span class="cart__form-price cart__form-price--discount">
                        <!-- {{ discount.toFixed(2) }} ??? -->
                        <formatted-number :number="discount"></formatted-number>
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col text-end fw-bold">Total price:</div>
                    <div class="col text-start">
                      <span class="cart__form-price cart__form-price--total">
                        <!-- {{ totalPriceAnimated.number.toFixed(2) }}??? -->
                        <formatted-number
                          :number="totalPrice"
                        ></formatted-number>
                      </span>
                    </div>
                  </div>

                  <div class="row text-start">
                    <div class="col">
                      <ui-input
                        v-model="couponCode"
                        placeholder="Coupon code"
                        icon="ticket"
                        @applyCoupon="applyCoupon()"
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
                        :disabled="disabledBuyButton"
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
            @click="deleteItemsFromCart()"
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
    line-height: 24px;
    &--error {
      background-color: rgba(235, 62, 125, 0.25);
      color: $color-primary;
    }
  }
}
</style>
