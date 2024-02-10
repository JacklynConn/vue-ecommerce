<template>
  <div class="flex flex-col h-screen">
    <!-- Navbar -->

    <div>
      <Navbar />
    </div>

    <!-- Signup -->
    <div
      class="mb-auto my-5 mb w-11/12 mx-auto bg-white rounded-md shadow py-10 px-5"
    >
      <h1
        class="mb-5 text-indigo-700 font-bold text-center tracking-wide font-mono"
      >
        Signup Form
      </h1>
      <form class="space-y-4" action="">
        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="username"
              autofocus
            />
          </div>
        </div>

        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
              />
              <path
                d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="email"
            />
          </div>
        </div>

        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="phone"
            />
          </div>
        </div>

        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                d="M3.75 3a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V16C17 8.82 11.18 3 4 3h-.25Z"
              />
              <path
                d="M3 8.75A.75.75 0 0 1 3.75 8H4a8 8 0 0 1 8 8v.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V16a6 6 0 0 0-6-6h-.25A.75.75 0 0 1 3 9.25v-.5ZM7 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="telegram"
            />
          </div>
        </div>

        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                d="M3.75 3a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V16C17 8.82 11.18 3 4 3h-.25Z"
              />
              <path
                d="M3 8.75A.75.75 0 0 1 3.75 8H4a8 8 0 0 1 8 8v.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V16a6 6 0 0 0-6-6h-.25A.75.75 0 0 1 3 9.25v-.5ZM7 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
          </div>

          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="facebook"
            />
          </div>
        </div>

        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                fill-rule="evenodd"
                d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="location"
            />
          </div>
        </div>

        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="password"
            />
          </div>
        </div>

        <div class="flex items-center">
          <div class="p-2 border-2 border-indigo-700 rounded-l-md border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-pink-600"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="w-full">
            <input
              class="text-gray-700 font-thin p-2 w-full rounded-r-md focus:outline-none border-2 border-indigo-700"
              type="text"
              placeholder="confirm password"
            />
          </div>
        </div>

        <div>
          <button
            v-if="true"
            class="hover:bg-indigo-900 hover:text-white w-full py-2 rounded-md shadow bg-white font-mono text-indigo-700"
          >
            Sign up
          </button>

          <button
            v-else
            class="relative w-full py-2 rounded-md shadow bg-white font-mono text-indigo-700"
          >
            <div>Signing up...</div>
            <div class="absolute top-3 right-4">
              <div
                class="animate-spin rounded-full h-4 w-4 border-b-2 border-r-2 border-indigo-700"
              ></div>
            </div>
          </button>
        </div>

        <div>
          <p class="text-indigo-800 font-thin text-sm">
            Already have an account?
            <router-link :to="{ name: 'Signin' }">
              <span
                class="ml-2 font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer underline font-mono"
                >Signin</span
              >
            </router-link>
          </p>
        </div>
      </form>
    </div>

    <!-- Footer -->
    <div class="mt-5">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
