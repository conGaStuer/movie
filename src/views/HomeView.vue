<template>
  <div
    class="w-full h-svh bg-[url('https://img.ophim12.cc/uploads/movies/nghich-ly-ke-sat-nhan-poster.jpg')] bg-right-top bg-cover"
  >
    <NavBarVue></NavBarVue>
    <div
      class="w-3/6 h-340 text-white relative top-32 left-20 flex justify-between flex-col"
    >
      <p
        class="text-3xl font-bold tracking-wider bg-red-600 w-56 p-3 relative top-4 rounded-lg"
      >
        TXK MOVIE
      </p>
      <div class="text-6xl font-bold">
        Phim lậu <span>Trà Xuân</span> làm,<br />
        mời bạn xem nha :v.
      </div>
      <div class="text-sm font-bold">
        <span class="p-1 bg-white text-black mr-4">PG 18</span>
        <span class="p-1 bg-black text-white mr-4">HD </span>
        <span class="mr-4">Hành động, Hàn Quốc</span>
        <span class="mr-4"
          ><i class="fa-solid fa-calendar-days text-red-600"></i> 2024</span
        >
        <span class="mr-4"
          ><i class="fa-regular fa-clock text-red-600"></i> 8 tập</span
        >
      </div>
      <button
        class="w-36 h-16 bg-gray-900 rounded-3xl text-white font-bold border-2 border-red-600"
      >
        Xem ngay
      </button>
    </div>
  </div>
  <div
    class="w-full h-auto bg-gray-900 flex justify-center flex-col items-center"
  >
    <div class="w-96 h-32 relative bottom-2 flex flex-col justify-around">
      <p class="text-4xl text-white text-center font-bold">Phim mới cập nhật</p>
    </div>
    <div class="w-90 h-90 grid grid-cols-4 grid-rows-6 gap-8">
      <router-link
        class="w-85 h-420 inline-block text-white text-sm font-bold cursor-pointer"
        v-for="movie in movies"
        :key="movie._id"
        :to="`detail/${movie.slug}`"
        :slug="movie.slug"
      >
        <div
          class="w-full h-81 bg-gray-400 bg-cover"
          :style="{
            backgroundImage: `url( https://img.ophim12.cc/uploads/movies/${movie.thumb_url})`,
          }"
        ></div>
        <div class="flex justify-between items-center relative top-3">
          <span>{{ movie.name }}</span>
          <span class="text-red-600">{{ movie.year }}</span>
        </div>
        <div class="flex justify-between items-center relative top-6 text-sm">
          <div class="text-red-300">
            {{ movie.origin_name }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="h-20"></div>
  </div>
</template>

<script>
import NavBarVue from "./NavBar.vue";
// @ is an alias to /src
import axios from "axios";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    NavBarVue,
  },
  setup() {
    const movies = ref([]);
    axios
      .get("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1")
      .then((res) => {
        movies.value = res.data.items;
        console.log(movies.value);
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      movies,
    };
  },
};
</script>
