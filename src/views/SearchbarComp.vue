<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import FoundProducts from "../components/foundProducts.vue";

// load vuex store to component
const store = useStore();

// found-products-list toggle
const areProducts = ref(false);
// get all products
store.dispatch("fetchProducts");

// get filtered products
const filteredProducts = computed(() => store.getters.getFilteredProducts);

// search products
function onInput(event) {
  const searchTerm = event.target.value;
  if (searchTerm !== "") {
    store.dispatch("filterProducts", searchTerm);
    if (!filteredProducts.value.length) {
      areProducts.value = false;
    } else {
      areProducts.value = true;
    }
  } else {
    areProducts.value = false;
  }
}
</script>
<template>
  <div class="td-search-popup active" id="td-search-popup">
    <form action="#" class="search-form">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          @input="onInput"
          placeholder="Search for products or just type @all"
        />
      </div>
      <button type="button" class="submit-btn">
        <svg
          class="svg-inline--fa fa-search fa-w-16"
          aria-hidden="true"
          focusable="false"
          data-prefix="fa"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </button>
    </form>
  </div>
  <FoundProducts
    id="FoundProducts"
    v-if="areProducts"
    :filteredProducts="filteredProducts"
  ></FoundProducts>
</template>
