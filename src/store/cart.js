import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    items: [
      { id: 1, count: 2 },
      { id: 2, count: 4 },
    ],
  }),

  getters: {
    totalCount: (state) =>
      state.items.map((i) => i.count).reduce((count, num) => count + num, 0),
  },

  actions: {
    addItem() {
      console.log("add item", this.items);
      this.items.push({ id: 3, count: 3 });
    },
  },
});
