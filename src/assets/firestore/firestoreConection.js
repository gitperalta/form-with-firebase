// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPZHY1MdWzfhohK8Js2Ux3jG227FhygVc",
  authDomain: "respuestas-be12d.firebaseapp.com",
  projectId: "respuestas-be12d",
  storageBucket: "respuestas-be12d.appspot.com",
  messagingSenderId: "553949274",
  appId: "1:553949274:web:e4972d264b9420fbda2063",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const addResponse = async (col, doc) => {
  try {
    const docRef = await addDoc(collection(db, col), doc);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const getResponse = async (res) => {
  try {
    const response = [];
    const querySnapshot = await getDocs(collection(db, res));
    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
