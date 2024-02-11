import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const userCollection = (collection) => {
  const error = ref(null);
  const isPending = ref(false);
  let documentRef = ref(null);

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

  const addDoc = async (category) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await projectFirestore
        .collection(collection)
        .doc(category.name)
        .set(category);
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
      isPending.value = false;
    }
  };

  const removeDoc= async (docID) => {
    documentRef = projectFirestore.collection(collection).doc(docID);
    error.value = null;

    try {
      const res = await documentRef.delete();
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
      isPending.value = false;
    }
  };


  return { error, addUser, addDoc, removeDoc, isPending };
};

export default userCollection;
