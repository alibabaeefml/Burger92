<script setup>
import SeeAllMenuBtn from '../components/SeeAllMenuBtn.vue'
import ButtonComp from '../components/ButtonComp.vue';
import { ref } from '@vue/reactivity';
import TitlesComp from '../components/TitlesComp.vue';
const tData = ref({ s: 'An Unique Place', t: 'World Of Unparalleled Flavors', sClass: 'sub-title text-secondary', tClass: 'title text-white' })
const btnData = ref({ btnTxt: 'See All Menu', btnClass: 'btn-base' })
</script>

<template>
  <section class="featured-area pd-bottom-150" style="background-image: url(/data/imgs/burgerbackground.jpg)">
    <div class="overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center">
            <TitlesComp :tData=tData />
            <ButtonComp :btnData=btnData />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>
