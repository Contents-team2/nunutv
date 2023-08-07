import { getRdbRequest } from "../utils/firebase.api";

const FirebaseTest = () => {
  const url = `users`;
  const d = getRdbRequest(url);

  console.log(typeof d, d);
  return (
    <>
      <div>FirebaseTest</div>
      <div>FirebaseTest</div>
    </>
  );
};

export default FirebaseTest;
