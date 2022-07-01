<script setup>
import CategoryItem from '../components/CategoryItem.vue';
import { ref } from 'vue';

defineProps(['categories'])

</script>

<template>
  <section class="category-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 align-self-center">
          <ul class="category-menu">
            <CategoryItem v-for="(item, i) in categories" :key="i" :item=item />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
