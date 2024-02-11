import { projectFirestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collection) => {
    const error = ref(null);
    let collectionRef = ref(null);
    const isPending = ref(null);
    const documents = ref(null);
    
    collectionRef = projectFirestore.collection(collection).orderBy("createdAt", "desc");
    
    const unsub = collectionRef.onSnapshot(
        (snap) => {
        let results = [];
        isPending.value = true;

        snap.docs.forEach((doc) => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
        });
        documents.value = results;
        error.value = null;
        isPending.value = false;
        },
        (err) => {
        console.log(err.message);
        documents.value = null;
        isPending.value = false;
        error.value = err.message;
        }
    );
    
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
    });
    
    return { error, isPending, documents };
    };

export default getCollection;