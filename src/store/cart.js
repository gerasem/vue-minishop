import { defineStore } from "pinia";

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
  },
});
