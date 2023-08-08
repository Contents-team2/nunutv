import { storage } from "../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";

const FirebaseTest = () => {
  //storage get 예제
  //파일에 대한 참조를 가져온다
  const starsRef = ref(storage, "test-video.mp4");

  //url을 통해 다운로드한다
  getDownloadURL(starsRef).then((url) => {
    console.log(url);
  });

  return (
    <>
      <div>FirebaseTest</div>
      <div>FirebaseTest</div>
    </>
  );
};

export default FirebaseTest;
