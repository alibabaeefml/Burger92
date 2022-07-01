<script setup>
import { ref } from '@vue/reactivity';
import ButtonComp from '../components/ButtonComp.vue';
const btnData = ref({ btnTxt: 'Get It Now', btnClass: 'btn-secondary' })
</script>

<template>
  <section class="banner-area">
    <div class="banner-thumb">
      <img src="/assets/banner.png" alt="img" />
    </div>
    <div class="banner-bg-img" style="left: -1.99641%; top: -0.869565%"></div>
    <div class="banner-shape-1">
      <img src="/assets/shape-1.png" alt="img" />
    </div>
    <div class="banner-shape-2">
      <img src="/assets/shape-2.png" alt="img" />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 align-self-center">
          <div class="banner-inner text-center">
            <h3>Do not miss it!</h3>
            <h1>Pizza tastes better than skinny feels.</h1>
            <ButtonComp :btnData="btnData" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

