<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
const store = useStore();
const email = ref('');
const password = ref('');
const passwordAgain = ref('')
function signUp() {
    let user = {};
    user['email'] = email.value;
    user['password'] = password.value;
    passwordAgain.value == password.value ?
        store.dispatch('signUp', user) : alert('Renter password correcctly please!');
}
defineEmits(['switchForm'])
</script>
<template>

    <div>
        <form autocomplete="off" class="sign-in-form " @submit.prevent="submit">
            <p class="h2 signintitle">Sign-up</p>
            <div class="form-floating">
                <input type="Email" autocomplete="off" class="form-control" id="floatingInput"
                    placeholder="name@example.com" v-model="email" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" autocomplete="off" class="form-control" id="floatingPassword"
                    placeholder="Password" v-model="password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input type="password" autocomplete="off" class="form-control" id="floatingPassword"
                    placeholder="Password Again" v-model="passwordAgain" />
                <label for="floatingPassword">Password Again</label>
            </div>
            <button class="btn btn-white" @click="signUp">Sign up</button>
            <a class="idhacc" href="#" @click="$emit('switchForm')">I already have an account</a>
        </form>
    </div>

</template>