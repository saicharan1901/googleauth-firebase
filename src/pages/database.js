import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, child, set, remove } from 'firebase/database';
import { auth } from './firebase';

const db = getDatabase();
const userRef = ref(db, 'users');
const firestore = getFirestore();
const usersCollection = collection(firestore, "users");

// CRUD functions
export const createUser = async (user) => {
    try {
      const docRef = await addDoc(usersCollection, user);
      console.log("User created successfully with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding user: ", error);
    }
};

export const updateUser = (id, updates) => {
  const user = child(userRef, id);
  set(user, updates)
    .then(() => console.log('User updated successfully'))
    .catch((error) => console.error(error));
};

export const deleteUser = (id) => {
  const user = child(userRef, id);
  remove(user)
    .then(() => console.log('User deleted successfully'))
    .catch((error) => console.error(error));
};
