import Vue from 'vue'
import Vuex from 'vuex'

import categories from '../json/categories.json'
import products from '../json/products.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: categories,
    allProducts: products,
    filteredProducts: products,
    basket: {
      products: [],
      totalPrice: {
          amount: 0,
          currency: "TL",
          amountWithOutFreeCargo: 0,
          minFreeCargoLimit:500
      },
      totalCount: 0
    },
    searchNotFound: false
  },
  mutations: {
      resetProductsVisible(state, payLoad) {
          state.filteredProducts = payLoad;
      },
      searchProduct(state, payLoad) {
          state.filteredProducts = payLoad;
      }
  },
  actions: {
      resetProductsVisible({commit}, payLoad) {
          commit('resetProductsVisible',payLoad);
      },
      searchProduct({commit}, payLoad) {
          commit('searchProduct',payLoad);
      },
  },
  modules: {
  }
});