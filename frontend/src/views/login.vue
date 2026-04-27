<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="loginUser">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../Store/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const auth = useAuthStore();
const router = useRouter();

const loginUser = async () => {
  await auth.login({
    email: email.value,
    password: password.value
  });
  router.push('/dashboard');
};
</script>