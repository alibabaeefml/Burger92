<script setup>
import ProductsSubMenu from "../components/ProductsSubMenu.vue";
import { useStore } from 'vuex';
import { computed, ref } from "@vue/runtime-core";
const store = useStore();
const logoutval = function (e) {
  e.target.title = 'Log out from ' + JSON.parse(localStorage.signedIn).email.split('@')[0];
};
const isLoggedIn = computed(() => store.getters.isLoggedIn)
function logOut() {
  store.dispatch('signOut')
}

defineEmits(['showAuth', 'showSearchbar']);

</script>
<template>
  <header class="navbar-area">
    <nav class="navbar navbar-expand-lg">
      <div class="container nav-container">
        <div class="responsive-mobile-menu">
          <button class="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="icon-left"></span>
            <span class="icon-right"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="themefie_main_menu">
          <ul class="navbar-nav menu-open">
            <li>
              <a href="/">HOME</a>
            </li>
            <li class="current-menu-item menu-item-has-children">
              <a href="#">PRODUCTS</a>
              <ProductsSubMenu />
            </li>
            <li>
              <a href="/about">ABOUT US</a>
            </li>
            <li>
              <a href="/contact">CONTACTS</a>
            </li>
          </ul>
        </div>
        <div class="logo">
          <a class="main-logo" href="/"><img src="/assets/logo.png" alt="img" /></a>
        </div>
        <div class="nav-right-part nav-right-part-mobile">
          <ul>
            <li>
              <a  href="#" v-if="isLoggedIn" @click="logOut" @mouseover="logoutval"><i
                  class="ri-logout-circle-line"></i></a>
              <a title="Log-In" href="#" v-else @click="$emit('showAuth')"><i class="ri-user-line"></i></a>
            </li>
            <li>
              <a class="search" href="#" @click="$emit('showSearchbar')"><i class="ri-search-line"></i></a>
            </li>
            <li class="phone-contact d-md-block d-none">
              <i class="ri-phone-fill float-start"></i>
              +997 509 153 849
            </li>
            <li class="menu-cart">
              <a href="cart.html">CART <span>1</span></a>
            </li>
            <li>49.50 $</li>
          </ul>
        </div>
        <div class="nav-right-part nav-right-part-desktop">
          <ul>
            <li>
              <a class="search" href="#" @click="$emit('showSearchbar')"><i class="ri-search-line"></i></a>
            </li>
            <li>
              <a  href="#" v-if="isLoggedIn" @click="logOut" @mouseover="logoutval"><i class="ri-logout-circle-line"></i></a>
              <a title="Log-In" href="#" v-else @click="$emit('showAuth')"><i class="ri-user-line"></i></a>
            </li>
            <li class="phone-contact">
              <i class="ri-phone-fill float-start"></i>
              +997 509 153 849
            </li>
            <li class="menu-cart">
              <a href="cart.html">CART <span>1</span></a>
            </li>
            <li>49.50 $</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
