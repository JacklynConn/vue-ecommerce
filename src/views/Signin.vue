<template>
  <div class="flex flex-col h-screen">
    <!-- Navbar -->
    <div>
      <Navbar />
    </div>

    <!-- Signin Form -->
    <div
      class="mb-auto mt-20 w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto bg-white rounded-md shadow py-10 px-5"
    >
      <h1
        class="mb-5 text-indigo-700 font-bold text-center tracking-wide font-mono"
      >
        Signin Form
      </h1>

      <form @submit.prevent="handleSignin" class="space-y-4">
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
              type="email"
              placeholder="email"
              v-model="email"
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
              type="password"
              placeholder="password"
              v-model="password"
            />
          </div>
        </div>

        <label class="text-red-600 font-thin text-sm" v-if="error">{{ error }}</label>

        <div>
          <button
            v-if="!isPending"
            class="hover:bg-indigo-900 hover:text-white w-full py-2 rounded-md shadow bg-white font-mono text-indigo-700"
          >
            Sign in
          </button>

          <button
            v-else
            class="relative w-full py-2 rounded-md shadow bg-white font-mono text-indigo-700"
          >
            <div>Signing in...</div>
            <div class="absolute top-3 right-4">
              <div
                class="animate-spin rounded-full h-4 w-4 border-b-2 border-r-2 border-indigo-700"
              ></div>
            </div>
          </button>
        </div>

        <div>
          <p class="text-indigo-800 font-thin text-sm">
            Don't have an account?
            <router-link :to="{ name: 'Signup' }">
              <span
                class="ml-2 font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer underline font-mono"
                >Singup</span
              >
            </router-link>
          </p>
        </div>
      </form>
    </div>

    <!-- Footer -->
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import useSignin from "@/composable/useSignin";
import { useRouter } from "vue-router";

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const email = ref("");
    const password = ref("");

    const { error, signin, isPending } = useSignin();
    const router = useRouter();

    const handleSignin = async () => {
      await signin(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };
    return {
      email,
      password,
      handleSignin,
      isPending,
      error,
    };
  },
};
</script>

<style></style>
