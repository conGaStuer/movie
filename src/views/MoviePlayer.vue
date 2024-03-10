<template>
  <div class="w-full h-81">
    <video
      :src="movies[0]?.filename"
      loop
      muted
      controls
      type="video/mp4"
    ></video>
    {{ movies[0]?.filename }}
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  props: ["slug"],
  setup(props) {
    const movieData = ref([]);
    const movies = ref([]);
    onMounted(() => {
      axios
        .get(`https://ophim1.com/phim/${props.slug}`)
        .then((res) => {
          movieData.value = res.data.episodes;
          const serverData = res.data.episodes.map(
            (episode) => episode.server_data
          );

          movies.value = serverData.flat();
          console.log(movieData.value);
          console.log(movies.value);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      movieData,
      movies,
    };
  },
};
</script>

<style></style>
