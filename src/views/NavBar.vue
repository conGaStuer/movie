<template>
  <main class="font-sans w-full h-svh">
    <nav
      class="w-full h-24 flex justify-center items-center bg-transparent font-pop"
    >
      <div class="w-90 h-full flex justify-between items-center">
        <img src="../assets/logo.png" class="w-40" />
        <div
          class="w-3/12 h-12 flex justify-around items-center text-gray-200 text-lg font-bold"
        >
          <router-link to="/">Trang chủ</router-link>
          <router-link to="/home">Bộ sưu tập </router-link>
          <router-link to="/home">Thể loại</router-link>
        </div>
        <div>
          <i class="fa-solid fa-magnifying-glass text-white mr-4"></i>
          <input
            type="text"
            class="w-60 h-8 rounded-md indent-2 placeholder:text-sm text-sm"
            placeholder="Tìm kiếm phim....."
          />
        </div>
      </div>
    </nav>
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
  </main>
  <div
    class="w-full h-auto bg-gray-900 flex justify-center flex-col items-center"
  >
    <div class="w-96 h-32 relative bottom-2 flex flex-col justify-around">
      <p class="text-4xl text-white text-center font-bold">Phim mới cập nhật</p>
    </div>
    <div class="w-90 h-90 grid grid-cols-4 grid-rows-6 gap-8">
      <div
        class="w-85 h-420 inline-block text-white text-sm font-bold cursor-pointer"
        v-for="movie in movies"
        :key="movie._id"
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
      </div>
    </div>
    <div class="h-20"></div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
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

<style></style>
