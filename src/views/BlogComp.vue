<script setup>
import BlogItem from '../components/BlogItem.vue';
import { ref } from 'vue';
import TitlesComp from '../components/TitlesComp.vue';
const tData = ref({ s: 'News & Blog', t: 'Our Stories', sClass: 'sub-title', tClass: 'title' })
const blogs = ref();
$.get('/data/blog.json', data => {
  blogs.value = data
})
</script>
<template>
  <section class="blog-area pd-bottom-90">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-7">
          <div class="section-title text-center">
            <TitlesComp :tData=tData />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <BlogItem v-for="(item, i) in blogs" :key="i" :item=item />
      </div>
    </div>
  </section>
</template>

<style>
</style>
