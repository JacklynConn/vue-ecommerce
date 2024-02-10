<template>
  <div
    class="my-1 shadow bg-indigo-800 text-white flex justify-center items-center space-x-4"
  >
    <div class="relative group py-2">
      <span>Categories</span>
      <!-- Dropdown Categories -->
      <div
        class="absolute top-10 hidden group-hover:block bg-white w-96 h-96 shadow rounded-md"
      >
        <p
          class="px-5 py-2 text-gray-400 hover:shadow hover:text-indigo-700 border-b-2 border-indigo-100"
          v-for="category in categories"
          :key="category"
        >
          {{ category.name }}
        </p>
      </div>
    </div>

    <div class="relative group py-2">
      <span>Add Category</span>
      <!-- Dropdown add category -->
      <div
        class="absolute top-10 -left-20 hidden group-hover:block bg-white w-96 h-auto shadow rounded-md"
      >
        <form class="px-5 py-4 space-y-4 ">
          <input
            class="p-2 w-full shadow focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
            type="text"
            required
            placeholder="Category Name"
          />

          <input
            class="p-2 w-full shadow focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
            type="file"
            required
          />
          <button class="bg-white shadow w-full py-2 text-indigo-700">Add</button>
        </form>
      </div>
    </div>

    <div>Promote Admin</div>
    <div>Reports</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const categories = ref([
      {
        name: "Shoes",
      },
      {
        name: "Clothes",
      },
      {
        name: "Electronics",
      },
    ]);

    return { categories };
  },
};
</script>

<style></style>
