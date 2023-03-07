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
  }),

  getters: {
    totalCount: (state) => {
      return state.cartList
        .map((i) => i.count)
        .reduce((count, num) => count + num, 0);
    },

    couponError(state) {
      console.log(state.coupon.code, state.coupon.minOrder > state.totalPrice);
      if (state.coupon.code && state.coupon.minOrder > state.totalPrice) {
        // state.coupon = {
        //   code: "",
        //   type: null,
        //   value: null,
        //   minOrder: null,
        // };
        return `Min order ${state.coupon.minOrder} €`;
      }
      return false;
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
      console.log("updated getter");
      if (state.coupon.code) {
        console.log("coupon is not empty");
        if (!state.couponError) {
          return totalPrice;
        }
        if (state.coupon.type === "€") {
          console.log("get total", totalPrice - state.coupon.value);

          return totalPrice - state.coupon.value;
        } else if (state.coupon.type === "%") {
          return (totalPrice * (100 - state.coupon.value)) / 100;
        }
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
        this.cartList = JSON.parse(readLS);
      }
    },

    saveToLS() {
      localStorage.setItem("itemsInCart", JSON.stringify(this.cartList));
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
      console.log("change count", item, count);
      this.cartList.find((i) => i.id === item.id).count = count;
      console.log(
        "new count",
        this.cartList.find((i) => i.id === item.id).count
      );
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
          console.log("apply coupon");
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
      }
    },
  },
});
