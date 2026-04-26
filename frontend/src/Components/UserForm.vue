<template>
  <div>
    <input v-model="name" placeholder="Enter Name" />
    <input v-model="email" placeholder="Enter Email" />
    <button @click="submitUser">Add User</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    async submitUser() {
      await axios.post('http://localhost:5000/api/users', {
        name: this.name,
        email: this.email
        });
      this.$emit('user-added');
      this.name = '';
      this.email = '';
    }
  }
}
</script>

