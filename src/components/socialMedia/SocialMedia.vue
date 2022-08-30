<template>
  <div class="text-center mt-4 w-full">
    <button class="border-2 px-6 w-1/2" @click="githubHandler">
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init";

export default {
  data() {
    return {};
  },
  methods: {
    githubHandler() {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          localStorage.setItem("token", user.accessToken);
          if (user.email) {
            this.$router.replace(this.$route.redirectedFrom?.path ?? "/");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
  }
};
</script>
