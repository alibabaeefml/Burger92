import { ref } from "vue";

const state = {
  products: ref([]),
  filteredProducts: ref([]),
};

const getters = {
  getFilteredProducts: () => state.filteredProducts.value,
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setfilteredProducts(state, filteredProducts) {
    state.filteredProducts = filteredProducts;
  },
};

const actions = {
  fetchProducts({ commit }) {
    $.get("/data/products.json", (data) => {
      const products = data;
      commit("setProducts", products);
    });
  },
  filterProducts({ commit }, searchTerm) {
    if (searchTerm !== "") {
      const products = state.products.value;
      let fetched = [];
      for (let item in products) {
        const { name } = products[item];
        if (name.includes(searchTerm)) {
          fetched.push(products[item]);
        }
      }
      searchTerm === "@all" ? (fetched = products) : null;
      commit("setfilteredProducts", fetched);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
