import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("BqD8ezudNF9v3ASB8VSH")
  .collection("cartItems")
  .doc("cBDlnA8Clm6fcnGORJOD");
firestore.doc("/users/BqD8ezudNF9v3ASB8VSH/cartItems/cBDlnA8Clm6fcnGORJOD");
firestore.collection("/users/BqD8ezudNF9v3ASB8VSH/cartItems");
