<script setup>
defineEmits(['popUpHider'])
</script>
<template>
  <div class="body-overlay active" id="body-overlay" @click="$emit('popUpHider')"></div>
</template>
