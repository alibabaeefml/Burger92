<script setup>
import ProductItem from '../components/ProductItem.vue';
import PopularDishItem from '../components/PopularDishItem.vue';
import { ref } from '@vue/reactivity';

import TitlesComp from '../components/TitlesComp.vue';
const tData = ref({ s: 'Our signature', t: 'Delicious Deals for Delicious Meals', sClass: 'sub-title', tClass: 'title' })

const productsCat = ref([
  {
    "name": "Coca-Cola",
    "img": "/data/imgs/coca-cola.png",
    "rating": 4.5
  },
  {
    "name": "Sprite",
    "img": "/data/imgs/sprite.png",
    "rating": 2.5
  },
  {
    "name": "Fanta Orange",
    "img": "/data/imgs/fanta.png",
    "rating": 3
  },
  {
    "name": "",
    "img": "/assets/banner-beverage.png"
  }
]);
function getProducts(cat) {
  $.get('/data/categories.json', data => {
    for (let i of data) {
      i.name == cat ? productsCat.value = i.subCategory : null
    }
  })

}
defineProps(['categories'])
</script>

<template>
  <section class="product-area pd-bottom-90">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title text-center">
            <TitlesComp :tData=tData />
          </div>
          <ul class="product-nav nav nav-pills" id="pills-tab" role="tablist">
            <ProductItem v-for="(c, i) in categories" :key="i" :c=c @activeCat=getProducts />
          </ul>
        </div>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" role="tabpanel">
          <div class="row justify-content-center" :key="i">
            <PopularDishItem v-for="(item, i) in productsCat" :key="i" :item=item />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>


