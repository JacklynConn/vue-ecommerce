import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const userCollection = (collection) => {
  const error = ref(null);

  const addUser = async (id, userInfo) => {
    error.value = null;

    try {
      const result = await projectFirestore
        .collection(collection)
        .doc(id)
        .set(userInfo);
        return result;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addUser };
};

export default userCollection;
