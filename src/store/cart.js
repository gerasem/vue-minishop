import { defineStore } from "pinia";
import { useItemsStore } from "@/store/items";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    cartList: [],
  }),

  getters: {
    totalCount: (state) =>
      state.cartList.map((i) => i.count).reduce((count, num) => count + num, 0),
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
      console.log("delete item", item);
      this.cartList = this.cartList.filter((i) => i.id !== item.id);
      this.saveToLS();
    },

    decrementCount(item) {
      console.log("decrementCount", item);
      this.cartList.find((i) => i.id === item.id).count--;
      this.saveToLS();
    },

    incrementCount(item) {
      console.log("incrementCount", item);
      this.cartList.find((i) => i.id === item.id).count++;
      this.saveToLS();
    },

    deleteCart() {
      this.cartList = [];
    },
  },
});
