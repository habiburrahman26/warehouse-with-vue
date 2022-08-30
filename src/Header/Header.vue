<template>
  <header class="w-3/4 py-3 mx-auto h-[10vh]">
    <nav class="flex items-center gap-14">
      <p class="text-3xl font-semibold">E-Store</p>
      <ul class="flex items-center gap-5 text-lg">
        <li>
          <router-link class="font-medium" to="/">Home</router-link>
        </li>
        <li v-if="loggedIn">
          <router-link class="font-medium" to="/manageItem"
            >Manage Items</router-link
          >
        </li>
        <li v-if="loggedIn">
          <router-link class="font-medium" to="/addItem">Add Item</router-link>
        </li>
        <li v-if="loggedIn">
          <router-link class="font-medium" to="/myItem">My Item</router-link>
        </li>
      </ul>
      <div class="ml-auto">
        <router-link
          to="/login"
          v-if="!loggedIn"
          class="px-4 py-2 font-medium border border-transparent hover:border hover:border-pink-400 rounded mr-4"
          >Login</router-link
        >
        <router-link
          v-if="!loggedIn"
          to="/signup"
          class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold"
        >
          SignUp
        </router-link>
        <button
          v-if="loggedIn"
          class="px-4 py-2 font-medium border-transparent border border-pink-400 hover:bg-pink-200 rounded mr-4"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import auth from '../firebase.init';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    logout() {
      signOut(auth);
      localStorage.removeItem('token');
      this.$router.replace('/login');
    },
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
};
</script>

<style scoped>

a.active {
  color: red;
}
</style>
