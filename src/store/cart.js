import { defineStore } from "pinia";
import { useItemsStore } from "@/store/items";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    cartList: [],
    fullCart: [],
    couponList: [
      {
        test: {
          type: "%",
          value: 10,
          min_order: 100,
        },
      },
      {
        abc: {
          type: "€",
          value: 50,
          min_order: 100,
        },
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

    totalPrice: (state) => {
      const totalPrice = state.fullCart.reduce((total, item) => {
        const { price, count } = item;
        total += price * count;
        return total;
      }, 0);

      if (!state.freeShipping) {
        return totalPrice + 5;
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
      window.test = this.couponList;
    },
  },
});
