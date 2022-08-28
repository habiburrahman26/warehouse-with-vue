<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './Header/Header.vue';
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
