<script setup>
defineProps(["item"]);
</script>
<template>
  <li class="list-group-item">
    {{ item.name.toUpperCase() }} - {{ item.price }}
    <img style="width: 100px" :src="item.img" />
  </li>
</template>
