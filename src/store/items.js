import { defineStore } from "pinia";
import axios from "axios";

const fakeStoreUrl = "https://fakestoreapi.com";

export const useItemsStore = defineStore({
  id: "items",

  state: () => ({
    loading: true,
    search: "",
    items: [],
    serverError: "",
  }),

  actions: {
    async fetchAll() {
      this.loading = true;
      if (this.items.length) {
        this.items = [];
      }
      try {
        const response = await axios.get(`${fakeStoreUrl}/products`);
        if (response.status === 200) {
          this.items = response.data;
        }
      } catch (error) {
        this.serverError = error;
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
