import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null
  }),

  actions: {
    async login(data) {
      const res = await axios.post('http://localhost:5000/api/auth/login', data);
      this.token = res.data.token;
      this.user = res.data.user;
    }
  }
});