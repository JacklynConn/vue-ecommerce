import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(null);

const signin = async (email, password) => {
  error.value = ref(null);
  isPending.value = true;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not complete the signin");
    }
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      error.value = "That user does not exist";
    } else {
      error.value = "Incorrect login credentials";
    }
    isPending.value = false;
  }
};

const useSignin = () => {
  return { error, signin, isPending };
};

export default useSignin;
