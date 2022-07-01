<script setup>
import FindBranch from '../components/FindBranch.vue';
import { ref } from '@vue/reactivity';
import TitlesComp from '../components/TitlesComp.vue';
const tData = ref({ s: 'Our Location', t: 'Find Burger92 stores in your area', sClass: 'sub-title text-secondary', tClass: 'title text-white' })
</script>

<template>
  <section class="subscribe-area pd-bottom-150" style="background-image: url(/data/imgs/burgerbackground.jpg)">
    <div class="overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-9 col-md-10">
          <div class="section-title text-center">
            <TitlesComp :tData=tData />
            <FindBranch />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>
