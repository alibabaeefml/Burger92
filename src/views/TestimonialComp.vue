<script setup>
import { ref } from "@vue/reactivity";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation, } from 'vue3-carousel';
import CarouselItem from "../components/CarouselItem.vue";

const reviews = ref()
$.get('/data/testimonial.json', data => {
  reviews.value = data;
})
</script>

<template>
  <carousel :autoplay="4000" :wrap-around="true" :items-to-scroll="2" class="testimonial-area">
    <Slide v-for="(item) in reviews" :key="item">
      <div class="carousel__item">
        <CarouselItem :item=item />
      </div>
    </Slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

