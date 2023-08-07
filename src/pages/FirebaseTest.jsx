import React from "react";
import { database } from "../firebase/firebase";
import { ref, set } from "firebase/database";

const FirebaseTest = () => {
  const db = database;
  console.log(db);
  const setUser = () => {
    set(ref(db, "users/2"), {
      username: "name",
      email: "name@email.com",
    });
  };
  setUser();
  return (
    <>
      <div>FirebaseTest</div>
      <div>FirebaseTest</div>
    </>
  );
};

export default FirebaseTest;
