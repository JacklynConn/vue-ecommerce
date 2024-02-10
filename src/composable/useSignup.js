import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(null);

const signup = async (email, password, displayName) => {
    error.value = ref(null);
    isPending.value = ref(null);
    
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!response) {
        throw new Error("Could not complete the signup");
        }
        await response.user.updateProfile({ displayName });
        // error.value = null;
        isPending.value = false;
        return response;
    } catch (err) {
        // console.log(err.message);
        error.value = err.message;
        isPending.value = false;
    }
};

const useSignup = () => {
  return { error, signup, isPending };
};

export default useSignup;