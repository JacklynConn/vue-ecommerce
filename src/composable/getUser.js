import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const user = ref(null);

projectAuth.onAuthStateChanged((_user) => {
  if (_user) {
    user.value = _user;
  } else {
    user.value = null;
  }
});

const getUser = () => {
  return { user };
};

export default getUser;
