<script setup>
import SubCategoryItem from './subCategoryItem.vue';
defineProps(['item'])
</script>
<template>
    <li class="category-wrap">
        <a href="#">
            <img style="max-width:50px" :src="item.img" alt="category" />{{ item.name }}</a>
        <div class="category-sub-menu">
            <div class="row">
                <SubCategoryItem v-for="(subItem, i) in item.subCategory" :key="i" :subItem="subItem" />
            </div>
        </div>

    </li>
</template>