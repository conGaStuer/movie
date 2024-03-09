<template>
  <div class="w-full h-svh bg-cover backdrop-blur bg-gray-900">
    <NavBarVue></NavBarVue>
    <router-link
      :to="`/movie/${slug}`"
      class="w-600 h-420 relative top-8 left-16 flex justify-between items-start"
    >
      <div
        class="w-35 h-420 bg-cover bg-center cursor-pointer rounded-xl flex justify-center items-center"
      >
        <img
          :src="moviesData.poster_url"
          class="w-full h-full object-cover rounded-xl"
          alt="Movie Poster"
        />
      </div>
      <i
        class="fa-regular fa-circle-play text-8xl relative top-56 right-56 text-white cursor-pointer"
      ></i>
      <div
        class="w-3/5 h-420 flex flex-col justify-between font-bold text-white ml-4 overflow-hidden"
      >
        <p class="text-2xl text-red-600">{{ moviesData.episode_current }}</p>
        <p class="text-5xl text-white">{{ moviesData.name }}</p>
        <div class="text-sm flex items-center">
          <span class="p-1 border-2 border-white mr-4">{{
            moviesData.quality
          }}</span>
          <span
            class="mr-4"
            v-for="category in categories"
            :key="category.id"
            >{{ category.name }}</span
          >
          <span class="mr-4"
            ><i class="fa-solid fa-calendar-days text-red-600"></i>
            {{ moviesData.year }}</span
          >
          <span
            ><i class="fa-regular fa-clock text-red-600"></i>
            {{ moviesData.time }}</span
          >
        </div>
        <div>
          <p v-for="coun in country" :key="coun.id" class="mb-2">
            Quốc Gia: {{ coun.name }}
          </p>
        </div>
        <div class="overflow-y-auto">{{ moviesData.content }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import NavBarVue from "./NavBar.vue";
export default {
  props: ["slug"],
  components: {
    NavBarVue,
  },
  setup(props) {
    const moviesData = ref([]);
    const categories = ref([]);
    const country = ref([]);
    onMounted(() => {
      axios
        .get(`https://ophim1.com/phim/${props.slug}`)
        .then((res) => {
          moviesData.value = res.data.movie;
          categories.value = res.data.movie.category;
          country.value = res.data.movie.country;

          console.log(moviesData.value);
          console.log(categories.value);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      moviesData,
      categories,
      country,
    };
  },
};
</script>

<style></style>
