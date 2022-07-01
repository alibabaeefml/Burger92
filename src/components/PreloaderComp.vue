<script setup></script>

<template>
  <div class="preloader" id="preloader">
    <div class="preloader-inner">
      <div id="wave1"></div>
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*-----------------------------------------
    ## Preloader Css
-------------------------------------------*/
.pre-wrap {
  position: fixed;
  content: "";
  -webkit-transform: translate(-100%, -240%);
  transform: translate(-100%, -240%);
  font-size: 62px;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
}

.preloader-inner {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999999999;
  background: #fff;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.preloader-inner .cancel-preloader {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.preloader-inner .cancel-preloader a {
  background-color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--main-color);
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 30px;
  display: block;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.preloader-inner .cancel-preloader a:hover {
  background-color: var(--heading-color);
  color: #fff;
}

@-webkit-keyframes sk-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}
@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
/**===== wave1 =====*/
.spinner {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  margin: -25px 0 0 -25px;
  border-radius: 50%;
}

.spinner:before,
.spinner:after {
  content: "";
  border: 2px solid var(--main-color);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  left: 0px;
}

.spinner:before {
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
  opacity: 1;
  -webkit-animation: spWaveBe 0.6s infinite linear;
  animation: spWaveBe 0.6s infinite linear;
}

.spinner:after {
  -webkit-transform: scale(0, 0);
  transform: scale(0, 0);
  opacity: 0;
  -webkit-animation: spWaveAf 0.6s infinite linear;
  animation: spWaveAf 0.6s infinite linear;
}

@-webkit-keyframes spWaveAf {
  from {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes spWaveAf {
  from {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes spWaveBe {
  from {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
}
@keyframes spWaveBe {
  from {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
}
</style>
