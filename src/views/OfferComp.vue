<script setup>
import SpecialDelicious from '../components/SpecialDelicious.vue';
import FastDelivery from '../components/FastDelivery.vue';
import EnjoyItem from '../components/EnjoyItem.vue';
import { ref } from '@vue/reactivity';
const btnData = ref({ btnTxt: 'Order Now', btnClass: 'btn-white' })
</script>

<template>
  <section class="offer-area pd-top-120 pd-bottom-90">
    <div class="container">
      <div class="row justify-content-center">
        <SpecialDelicious :btnData=btnData />
        <div class="col-md-6 align-self-center">
          <EnjoyItem :btnData=btnData />
          <FastDelivery :btnData=btnData />
        </div>
      </div>
    </div>
  </section>
</template>
