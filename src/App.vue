<script setup>
import PreloaderComp from "./components/PreloaderComp.vue";
import AppHeader from "./views/AppHeader.vue";
import { computed, onMounted, ref } from "vue";
import BodyOverlay from "./views/BodyOverlay.vue";
import Searchbar from "./views/SearchbarComp.vue";
import AuthComp from "./views/AuthComp.vue";
import { useStore as store } from 'vuex'
import BannerComp from "./views/BannerComp.vue";
import CategoryComp from "./views/CategoryComp.vue";
import OfferComp from "./views/OfferComp.vue";
import PopularDishes from "./views/PopularDishes.vue";
import BacktoTop from "./components/BacktoTop.vue";
import SubscribeComp from "./views/SubscribeComp.vue";
import BlogComp from "./views/BlogComp.vue";
import TestimonialComp from "./views/TestimonialComp.vue";
import FooterComp from "./views/FooterComp.vue";
import FeaturedComp from "./views/FeaturedComp.vue";
import AboutComp from "./views/AboutComp.vue";
import ProductsComp from "./views/ProductsComp.vue";
const preloader = ref(true);
const auth = ref(false);
const showSearchbar = ref(false);
function hider() {
  setTimeout(() => {
    preloader.value = false;
  }, 1500);
}
onMounted(hider);

function popUpHider() {
  auth.value = false;
  showSearchbar.value = false
}

// sync users value with database
store().commit("syncUsers")
const isLoggedIn = computed(() => store().getters.isLoggedIn)

// fetch products categories
const categories = ref('')
const popularDishes = ref()
$.get('/data/categories.json', data => {
  categories.value = data;
  // get popular dishes
  for (let i of data) {
    i.popular ? popularDishes.value = i.subCategory : null;
  }
})

</script>

<template>
  <PreloaderComp v-if="preloader" />
  <BacktoTop />
  <AppHeader @showAuth="auth = true" @showSearchbar="showSearchbar = true" />
  <BodyOverlay @popUpHider="popUpHider" v-if="auth && !isLoggedIn || showSearchbar" />
  <Searchbar v-if="showSearchbar" />
  <AuthComp v-if="auth" />
  <BannerComp />
  <CategoryComp :categories="categories" />
  <OfferComp />
  <PopularDishes :popularDishes="popularDishes" />
  <FeaturedComp />
  <AboutComp />
  <ProductsComp :categories="categories" />
  <SubscribeComp />
  <TestimonialComp />
  <BlogComp />
  <FooterComp />
</template>
