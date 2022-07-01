<script setup>
import { ref } from "@vue/reactivity";
import AboutItem from "../components/AboutItem.vue";
import TitlesComp from '../components/TitlesComp.vue';
const tData = ref({ s: 'Why choose us', t: 'Why we are A Unique', sClass: 'sub-title', tClass: 'title' })

const features = ref()
$.get('/data/features.json', data => {
  features.value = data;
})
</script>
<template>
  <section class="about-area pd-top-120 pd-bottom-90">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="thumb mb-lg-0 mb-4">
            <img src="/data/imgs/cook.png" alt="img" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-title text-lg-start text-center">
            <TitlesComp :tData=tData />
            <div>
              It attracts with its original interior but above all the quality
              of the dishes served. Carefully prepared dishes are characterized
              by freshness and a lot of ingredients.
            </div>
          </div>
          <div class="row">
            <AboutItem v-for="(item, i) in features" :key="i" :item=item />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>
