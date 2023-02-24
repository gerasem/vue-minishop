import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    items: [],
  }),

  getters: {
    totalCount: (state) =>
      state.items.map((i) => i.count).reduce((count, num) => count + num, 0),
  },

  actions: {
    addItemToCart(item) {
      this.items.push({ id: item.id, count: 1 });
      this.saveToLS();
    },

    initShoppingCart() {
      const readLS = localStorage.getItem("itemsInCart");
      if (readLS) {
        this.items = JSON.parse(readLS);
      }
    },

    saveToLS() {
      localStorage.setItem("itemsInCart", JSON.stringify(this.items));
    },
  },
});
