<script setup>
import PopularDishItem from '../components/PopularDishItem.vue';
import TitlesComp from '../components/TitlesComp.vue';
import { ref } from 'vue';
const tData = ref({ s: 'Our signature', t: 'Populer Dishes', sClass: 'sub-title', tClass: 'title' })
defineProps(['popularDishes'])
</script>
<template>
  <section class="populer-area pd-bottom-90">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title text-center">
            <TitlesComp :tData=tData />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <PopularDishItem v-for="(item, i) in popularDishes" :key="i" :item=item />
      </div>
    </div>
  </section>
</template>

<style>
</style>
