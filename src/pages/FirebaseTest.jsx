import { get } from "firebase/database";
import { auth, storage } from "../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { getRdbRequest } from "../utils/firebase.api";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const FirebaseTest = () => {
  const [user, setUser] = useState({});
  // //storage get 예제
  // //파일에 대한 참조를 가져온다
  // const starsRef = ref(storage, "test-video.mp4");

  // //url을 통해 다운로드한다
  // getDownloadURL(starsRef).then((url) => {
  //   console.log(url);
  // });

  // // realtime database 예제
  // useEffect(() => {
  //   // 호출할 url 생성
  //   const url = `users/4`;
  //   const data = getRdbRequest(url);
  //   setUser(data);
  // }, []);

  const onClickHandler = () => {
    // console.log(user);
  };

  // //인증 예제
  // const email = "login@login.login";
  // const password = "loginlogin";

  // //가입
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // console.log(user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage)
  //     // ..
  //   });

  // // 로그인
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //   });

  return (
    <>
      <div>FirebaseTest</div>
      <div>FirebaseTest</div>
      <button onClick={onClickHandler}>button</button>
    </>
  );
};

export default FirebaseTest;