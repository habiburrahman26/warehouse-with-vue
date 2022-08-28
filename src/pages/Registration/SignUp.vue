<template>
  <div class="border rounded w-[450px] px-6 py-4 mx-auto mt-28">
    <h2 class="text-3xl mb-8 text-center">SignUp</h2>
    <form @submit.prevent="formSubmit" class="flex flex-col items-center">
      <input
        type="email"
        name="email"
        placeholder="Email"
        v-model="email"
        class="px-2 py-1 border w-4/5 outline-none focus:border focus:border-blue-400 mb-3 rounded"
      />
      <input
        type="password"
        name="email"
        placeholder="Password"
        v-model="password"
        class="px-2 py-1 border w-4/5 outline-none focus:border focus:border-blue-400 mb-3 rounded"
      />
      <p class="text-red-300">{{ splitErrorMessage }}</p>
      <button
        type="submit"
        class="px-10 py-2 bg-blue-400 text-white font-semibold rounded mt-4"
      >
        SignUp
      </button>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    splitErrorMessage() {
      const message = this.error?.split(":")[0];
      return message?.split("(")[1];
    },
  },
  methods: {
    formSubmit() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("token", user.uid); // store the token in local storage

          if (user.email) {
            this.$router.replace("/home");
          }
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>
