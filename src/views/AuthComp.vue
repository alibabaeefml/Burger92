<script setup>
import SignInComp from '../components/SignInComp.vue';
import SignUpComp from '../components/SignUpComp.vue';
import { useStore as store } from "vuex";
import { computed, ref } from '@vue/runtime-core';

const isLoggedIn = computed(() => store().getters.isLoggedIn);

// shown form value
const formSwitch = ref(false);
function onSwitchForm() {
    formSwitch.value = !formSwitch.value
}
</script>
<template>
    <SignInComp v-if="!isLoggedIn && !formSwitch" @switchForm="onSwitchForm" />
    <SignUpComp v-if="!isLoggedIn && formSwitch" @switchForm="onSwitchForm" />
</template>
