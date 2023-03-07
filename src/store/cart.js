import { defineStore } from "pinia";
import { useItemsStore } from "@/store/items";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    cartList: [],
    fullCart: [],
    couponList: [
      {
        code: "test",
        type: "%",
        value: 10,
        minOrder: 100,
      },
      {
        code: "abc",
        type: "€",
        value: 50,
        minOrder: 100,
      },
    ],
    coupon: {
      code: "",
      type: null,
      value: null,
      minOrder: null,
    },
    discount: 0,
  }),

  getters: {
    totalCount: (state) => {
      return state.cartList
        .map((i) => i.count)
        .reduce((count, num) => {
          if (count === "0") return;
          return count + num;
        }, 0);
    },

    totalPrice: (state) => {
      const totalPrice = state.fullCart.reduce((total, item) => {
        const { price, count } = item;
        total += price * count;
        return total;
      }, 0);

      if (!state.freeShipping) {
        return totalPrice + 5;
      }
      if (state.coupon.code && !state.couponError) {
        if (state.couponError) {
          return totalPrice;
        }
        let discountPrice;
        if (state.coupon.type === "€") {
          discountPrice = totalPrice - state.coupon.value;
        } else if (state.coupon.type === "%") {
          discountPrice = (totalPrice * (100 - state.coupon.value)) / 100;
        }
        state.discount = state.subTotal - discountPrice;
        return discountPrice;
      }
      return totalPrice;
    },

    subTotal: (state) => {
      return state.fullCart.reduce((total, item) => {
        const { price, count } = item;
        total += price * count;
        return total;
      }, 0);
    },

    couponError(state) {
      if (state.coupon.code && state.coupon.minOrder > state.subTotal) {
        return `Min order ${state.coupon.minOrder} € for coupon ${state.coupon.code}`;
      }
      return false;
    },

    freeShipping: (state) => {
      return state.subTotal >= 50;
    },
  },

  actions: {
    addItemToCart(item) {
      const itemInCart = this.cartList.find((i) => i.id === item.id);
      if (itemInCart) {
        itemInCart.count++;
      } else {
        this.cartList.push({ id: item.id, count: 1 });
      }
      this.saveToLS();
    },

    createFullCard() {
      const { items } = useItemsStore();
      this.fullCart = [];
      this.cartList.forEach((item) => {
        const foundedItem = items.find((i) => i.id === item.id);
        this.fullCart.push({ ...item, ...foundedItem });
      });
    },

    initShoppingCart() {
      const readLS = localStorage.getItem("itemsInCart");
      if (readLS) {
        const itemsInLS = JSON.parse(readLS);
        this.cartList = itemsInLS.filter((i) => i.count !== "");
      }
      const readCouponLS = localStorage.getItem("coupon");
      if (readCouponLS) {
        this.coupon = JSON.parse(readCouponLS);
      }
    },

    saveToLS() {
      localStorage.setItem("itemsInCart", JSON.stringify(this.cartList));
      localStorage.setItem("coupon", JSON.stringify(this.coupon));
    },

    deleteItem(item) {
      this.cartList = this.cartList.filter((i) => i.id !== item.id);
      this.saveToLS();
      this.createFullCard();
    },

    decrementCount(item) {
      if (this.cartList.find((i) => i.id === item.id).count <= 1) return;
      this.cartList.find((i) => i.id === item.id).count--;
      this.saveToLS();
      this.createFullCard();
    },

    incrementCount(item) {
      if (this.cartList.find((i) => i.id === item.id).count >= 999) return;
      this.cartList.find((i) => i.id === item.id).count++;
      this.saveToLS();
      this.createFullCard();
    },

    changeCount(item, count) {
      this.cartList.find((i) => i.id === item.id).count = count;
      this.saveToLS();
      this.createFullCard();
    },

    deleteCart() {
      this.cartList = [];
      this.fullCart = [];
      localStorage.removeItem("itemsInCart");
    },

    checkCouponCode(coupon) {
      let couponFound = false;
      this.couponList.forEach((c) => {
        if (c.code === coupon.toLowerCase()) {
          couponFound = true;
          this.coupon = this.couponList.find(
            (c) => c.code === coupon.toLowerCase()
          );
        }
      });
      if (!couponFound) {
        this.coupon = {
          code: "",
          type: null,
          value: null,
          minOrder: null,
        };
        this.saveToLS();
      }
    },
  },
});
