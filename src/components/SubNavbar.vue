<template>
  <div
    class="my-1 shadow text-sm sm:text-base bg-indigo-800 text-white flex justify-center items-center space-x-4"
  >
    <div class="relative group py-2">
      <div class="flex items-center sm:space-x-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span>Categories</span>
        <span class="group-hover:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span class="hidden group-hover:inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <!-- Dropdown Categories -->
      <div
        class="absolute top-10 hidden group-hover:block bg-white w-96 h-auto shadow rounded-md"
      >
        <p
          class="px-5 py-2 text-gray-400 hover:bg-indigo-900 hover:text-white border-b-2 border-indigo-100"
          v-for="category in categories"
          :key="category"
        >
          {{ category.name }}
        </p>
        <p
          class="px-5 py-2 text-gray-400 hover:bg-indigo-900 hover:text-white border-b-2 border-indigo-100"
        >
          All Categories
        </p>
      </div>
    </div>

    <div class="relative group py-2">
      <span>Add Category</span>
      <!-- Dropdown add category -->
      <div
        class="absolute top-10 -left-20 hidden group-hover:block bg-white w-96 h-auto shadow rounded-md"
      >
        <form class="px-5 py-4 space-y-4">
          <input
            class="p-2 w-full rounded-md shadow focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
            type="text"
            required
            placeholder="Category Name"
          />

          <input
            class="p-2 w-full rounded-md shadow focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
            type="file"
            required
          />
          <button
            v-if="true"
            class="bg-white shadow w-full py-2 hover:bg-indigo-800 hover:text-white rounded-md text-indigo-700"
          >
            Add
          </button>
          <button
            v-else
            class="relative bg-white shadow w-full py-2 rounded-md text-indigo-700"
          >
            <div>Saving...</div>
            <div class="absolute top-3 right-2">
              <div
                class="animate-spin h-4 w-4 rounded-full border-b-2 border-r-2 border-indigo-700"
              ></div>
            </div>
          </button>
        </form>
      </div>
    </div>

    <div class="relative group py-2">
      <span>Promote Admin</span>
      <!-- Dropdown add category -->
      <div
        class="absolute top-10 -right-20 hidden group-hover:block bg-white w-96 h-auto shadow rounded-md"
      >
        <form class="px-5 py-4 space-y-4">
          <input
            class="p-2 w-full rounded-md shadow focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
            type="email"
            required
            placeholder="Email"
          />

          <button
            v-if="true"
            class="bg-white shadow w-full py-2 hover:bg-indigo-800 hover:text-white rounded-md text-indigo-700"
          >
            Promote
          </button>
          <button
            v-else
            class="relative bg-white shadow w-full py-2 rounded-md text-indigo-700"
          >
            <div>Saving...</div>
            <div class="absolute top-3 right-2">
              <div
                class="animate-spin h-4 w-4 rounded-full border-b-2 border-r-2 border-indigo-700"
              ></div>
            </div>
          </button>
        </form>
      </div>
    </div>
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
