<template>
  <div class="p-5 bg-white flex justify-between items-center space-x-5 shadow">
    <div>
      <img
        class="w-30 cursor-pointer object-cover"
        src="@/assets/images/logo.png"
        alt="logo"
      />
    </div>

    <div class="w-full flex justify-end space-x-5 items-center text-indigo-700">
      <div class=" cursor-pointer hover:text-indigo-900">Category</div>
      <div v-if="windowWidth < 640">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class=" w-6 h-6 cursor-pointer hover:text-indigo-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div class="relative w-full" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="absolute top-2 left-2 w-5 h-5 cursor-pointer hover:text-indigo-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          class="p-1 pl-10 w-full font-thin focus:outline-none ring ring-offset-2 ring-indigo-700 rounded-full"
          type="text"
          placeholder="searching..."
        />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-6 h-6 cursor-pointer hover:text-indigo-900"
        >
          <path
            fill-rule="evenodd"
            d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const windowWidth = ref(window.innerWidth);
    const onResize = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      window.addEventListener("resize", onResize);
    });
    return { windowWidth };
  },
};
</script>
<style></style>
