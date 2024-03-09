<template>
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
</template>

<script>
export default {};
</script>

<style></style>
