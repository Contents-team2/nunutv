import { database } from "../firebase/firebase";
import { child, get, ref, set } from "@firebase/database";

const db = database;
// const strg = storage

/**
 * Get JSON data from firebase Realtime Database
 *
 * @param {String} url
 * @returns {object} data
 */
const getRdbRequest = (url) => {
  get(child(ref(db), url))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const postRdbRequest = (url, data) => {
  set(ref(db, url), data);
};

const patchRdbRequest = () => {};
const putRdbRequest = () => {};
const deleteRdbRequest = () => {};

export {
  getRdbRequest,
  postRdbRequest,
  patchRdbRequest,
  putRdbRequest,
  deleteRdbRequest,
};
