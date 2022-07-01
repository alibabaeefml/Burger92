<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
const store = useStore();
const user = ref({});
function signIn() {
    store.dispatch('signIn', user.value);
}
</script>
<template>
    <div>
        <form class="sign-in-form" autocomplete="off" @submit.prevent="submit">
            <p class="h2 signintitle">Sign-in</p>
            <div class="form-floating">
                <input type="Email" autocomplete="off" class="form-control" id="floatingInput"
                    placeholder="name@example.com" v-model="user.email" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" autocomplete="off" class="form-control" id="floatingPassword"
                    placeholder="Password" v-model="user.password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-white" @click="signIn">Sign in</button>
            <a class="idhacc" href="#" @click="$emit('switchForm')">I don't have an account</a>
        </form>
    </div>
</template>