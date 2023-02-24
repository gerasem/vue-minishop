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
      const { setLoading } = useItemsStore();
      setLoading(true);
      console.log("delete item", item);
      this.cartList = this.cartList.filter((i) => i.id !== item.id);
      this.saveToLS();
      setTimeout(() => setLoading(false), 500);
    },
  },
});
