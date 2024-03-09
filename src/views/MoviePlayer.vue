<template>
  {{ movieData.name }}
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  props: ["slug"],
  setup(props) {
    const movieData = ref([]);

    onMounted(() => {
      axios
        .get(`https://ophim1.com/phim/${props.slug}`)
        .then((res) => {
          movieData.value = res.data.episodes;
          console.log(movieData.value);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      movieData,
    };
  },
};
</script>

<style></style>
