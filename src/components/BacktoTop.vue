<script setup>
import { onMounted, ref } from "vue";
const topbtn = ref(false);
onMounted(() => {
  document.addEventListener("scroll", () => {
    document.documentElement.scrollTop > 0
      ? (topbtn.value = true)
      : (topbtn.value = false);
  });
});
function backToTop() {
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div class="back-to-top d-block" v-if="topbtn" @click="backToTop">
    <span class="back-top"
      ><svg
        class="svg-inline--fa fa-angle-double-up fa-w-10"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-double-up"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
        ></path></svg
      ><!-- <i class="fas fa-angle-double-up"></i> Font Awesome fontawesome.com --></span
    >
  </div>
</template>

<style scoped>
/*------------------------------------------------
    ## Back Top
------------------------------------------------*/
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 44px;
  height: 44px;
  color: #fff;
  background-color: var(--main-color);
  text-align: center;
  line-height: 44px;
  z-index: 99;
  font-size: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: none;
  -webkit-animation: backto-top-bounce 4s infinite ease-in-out;
  animation: backto-top-bounce 4s infinite ease-in-out;
  border-radius: 4px;
}

.back-to-top svg {
  margin-top: 11px;
}

@-webkit-keyframes backto-top-bounce {
  0% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-5px);
  }

  50% {
    -webkit-transform: translateY(8px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-5px);
  }
}

@keyframes backto-top-bounce {
  0% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-5px);
  }

  50% {
    -webkit-transform: translateY(8px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-5px);
  }
}
</style>
