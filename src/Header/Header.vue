<template>
  <header class="w-3/4 py-3 mx-auto h-[10vh]">
    <nav class="flex items-center gap-14">
      <p class="text-3xl font-semibold">E-Store</p>
      <ul class="flex items-center gap-5 text-lg">
        <li>
          <router-link class="font-medium" to="/home">Home</router-link>
        </li>
        <li>
          <router-link class="font-medium" to="/manageItem"
            >Manage Items</router-link
          >
        </li>
        <li>
          <router-link class="font-medium" to="/addItem">Add Item</router-link>
        </li>
        <li>
          <router-link class="font-medium" to="/myItem">My Item</router-link>
        </li>
      </ul>
      <div class="ml-auto">
        <button class="px-4 py-2 font-medium border border-transparent hover:border hover:border-pink-400 rounded mr-4">Login</button>
        <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold">
          SignUp
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
