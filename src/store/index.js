import { createStore } from "vuex";
import searchProducts from "./modules/searchProducts";
import auth from "./modules/auth.js";
export const store = createStore({
  modules: {
    searchProducts,
    auth
  },
});
