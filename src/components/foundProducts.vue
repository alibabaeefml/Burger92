<script setup>
import FoundProductItem from "./foundProductItem.vue";
defineProps(["filteredProducts"]);
</script>
<template>
  <div class="found-products">
    <ul class="list-group">
      <FoundProductItem
        v-for="(item, i) in filteredProducts"
        :key="i"
        :item="item"
      />
    </ul>
  </div>
</template>
