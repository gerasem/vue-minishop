import { defineStore } from "pinia";
import axios from "axios";
import { useCartStore } from "@/store/cart";

const fakeStoreUrl = "https://fakestoreapi.com";

export const useItemsStore = defineStore({
  id: "items",

  state: () => ({
    loading: true,
    search: "",
    items: [],
    categories: [],
    selectedCategory: "",
    serverError: "",
    selectedItem: {},
  }),

  actions: {
    async getItems() {
      this.loading = true;
      if (this.items.length) {
        this.items = [];
      }
      try {
        let response = {};
        if (this.selectedCategory) {
          response = await axios.get(
            `${fakeStoreUrl}/products/category/${this.selectedCategory}`
          );
        } else {
          response = await axios.get(`${fakeStoreUrl}/products`);
        }

        if (response.status === 200) {
          this.items = response.data;
        }
      } catch (error) {
        this.serverError = error;
        console.error(error);
      } finally {
        this.loading = false;
        const { createFullCard } = useCartStore();
        createFullCard();
      }
    },

    async getCategories() {
      this.loading = true;
      if (this.categories.length) {
        this.items = [];
      }
      try {
        const response = await axios.get(`${fakeStoreUrl}/products/categories`);
        if (response.status === 200) {
          this.categories = response.data;
        }
      } catch (error) {
        this.serverError = error;
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async getItem(id) {
      this.loading = true;
      if (this.selectedItem) {
        this.selectedItem = {};
      }
      try {
        const response = await axios.get(
          `${fakeStoreUrl}/products/${id}`
        );

        if (response.status === 200) {
          this.selectedItem = response.data;
        }
      } catch (error) {
        this.serverError = error;
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    setLoading(value) {
      this.loading = value;
    },
  },
});
