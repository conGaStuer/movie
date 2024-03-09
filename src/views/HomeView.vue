<template>
  <div
    class="w-full h-svh bg-[url('https://img.ophim12.cc/uploads/movies/nghich-ly-ke-sat-nhan-poster.jpg')] bg-right-top bg-cover"
  >
    <NavBarVue></NavBarVue>
  </div>
</template>

<script>
import NavBarVue from "./NavBar.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    NavBarVue,
  },
};
</script>
