<script setup>
import ReadMoreBtn from './ReadMoreBtn.vue'
defineProps(['item'])
const href = "/blogHrefTest"
</script>
<template>
    <div class="col-lg-4 col-md-6">
        <div class="single-blog-wrap">
            <div class="thumb">
                <img :src="item.img" alt="img" />
            </div>
            <div class="wrap-details">
                <span class="cat">
                    <span class="date">
                        <i class="ri-calendar-todo-fill"></i>{{ item.date }}
                    </span>
                    <a href="#" class="tag me-0">
                        <i class="ri-price-tag-3-fill"></i>{{ item.tagValue }}
                    </a>
                </span>
                <h5><a href="">{{ item.title }}</a></h5>
                <div class="wrap-hover-area">
                    <p class="mulltipleellipsis-clamp2">
                        {{ item.summary }}
                    </p>
                    <ReadMoreBtn :href=href />
                </div>
            </div>
        </div>
    </div>
</template>