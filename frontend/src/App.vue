<template>
  <div>
    <h1>Vue Full Stack App</h1>
    <UserForm @user-added="fetchUsers" />
    <UserList :users="users" />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import UserForm from './Components/UserForm.vue';
import UserList from './Components/UserList.vue';

export default {
  components: { UserForm, UserList },
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      const res = await axios.get('http://localhost:5000/api/users');
      this.users = res.data;
    }
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>



<!-- <script setup></script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style> -->
