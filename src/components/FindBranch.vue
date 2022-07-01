<script setup>
import SeeLocationBtn from './SeeLocationBtn.vue';

import { ref } from '@vue/reactivity';
import ButtonComp from './ButtonComp.vue';
const btnData = ref({ btnTxt: 'See Location', btnClass: 'btn-base' })

</script>
<template>
    <form>
        <div class="single-input-wrap mb-0 with-btn">
            <input type="email" placeholder="Zip code or state providence" />
            <ButtonComp :btnData=btnData />
        </div>
    </form>
</template>