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
      <div class="cursor-pointer hover:text-indigo-900">Category</div>
      <div v-if="windowWidth < 640">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer hover:text-indigo-900"
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
      <div v-if="!user">
        <router-link :to="{ name: 'Signin' }">
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
        </router-link>
      </div>

      <div v-else class="flex items-center space-x-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:text-indigo-900 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 hover:text-indigo-900 cursor-pointer"
          >
            <path
              d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            />
          </svg>
        </div>

        <div>
          <div
            class="group relative flex justify-center items-center w-7 h-7 rounded-full hover:bg-indigo-900 text-sm bg-indigo-700 text-white"
          >
            <span class="cursor-pointer uppercase">
              {{ user?.displayName[0] }}
            </span>

            <div class="absolute top-6 -right-5 w-16 h-10 bg-transparent"></div>

            <!-- Dropdown -->
            <div
              class="hidden group-hover:block absolute top-14 -right-5 bg-white shadow w-96 h-96"
            >
              <div class="flex space-x-2 p-5 border-b-2 border-gray-200">
                <div
                  class="flex justify-center items-center bg-indigo-700 text-white uppercase w-8 h-8 rounded-full"
                >
                  <div>{{ user?.displayName[0] }}</div>
                </div>
                <div class="text-gray-700 leading-none">
                  <p class="uppercase font-semibold">
                    {{ user?.displayName }}
                  </p>
                  <span class="uppercase text-gray-400 text-sm">{{
                    user?.email
                  }}</span>
                </div>
              </div>

              <div class="py-5 px-7 space-y-2 border-b-2 border-gray-200">
                <p
                  class="cursor-default text-gray-700 text-sm font-medium hover:text-indigo-700"
                >
                  Account Settings
                </p>
                <p
                  class="cursor-default text-gray-700 text-sm font-medium hover:text-indigo-700"
                >
                  Order History
                </p>
                <p
                  class="cursor-default text-gray-700 text-sm font-medium hover:text-indigo-700"
                >
                  Purchased History
                </p>
              </div>
              <div @click="handleSignout"
                class="text-gray-700 hover:text-indigo-700 cursor-pointer font-black py-5 px-7"
              >
                sigout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <SubNavbar />
</template>
<script>
import { onMounted, ref } from "vue";
import getUser from "@/composable/getUser";
import { projectAuth } from "@/firebase/config";  // import firebase auth service
import router from '@/router';
import SubNavbar from './SubNavbar.vue';
export default {
  components: {
    SubNavbar
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    const { user } = getUser();

    const onResize = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      window.addEventListener("resize", onResize);
    });

    const handleSignout = async () => {
      await projectAuth.signOut();
      router.push({ name: "Signin" });
    };

    return { windowWidth, user, handleSignout };
  },
};
</script>
<style></style>
