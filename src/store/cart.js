import { defineStore } from "pinia";
import { useItemsStore } from "@/store/items";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    cartList: [],
    fullCart: [],
  }),

  getters: {
    totalCount: (state) => {
      return state.cartList
        .map((i) => i.count)
        .reduce((count, num) => count + num, 0);
    },

    totalPrice: (state) => {
      return state.fullCart.reduce((total, item) => {
        const { price, count } = item;
        total += price * count;
        return total;
      }, 0);
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
      this.cartList.find((i) => i.id === item.id).count--;
      this.saveToLS();
      this.createFullCard();
    },

    incrementCount(item) {
      this.cartList.find((i) => i.id === item.id).count++;
      this.saveToLS();
      this.createFullCard();
    },

    deleteCart() {
      this.cartList = [];
    },
  },
});
