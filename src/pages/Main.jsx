import React, { useState, useEffect } from "react";
import MainBanner from "../components/MainBanner";
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Main = () => {
  const [url, setUrl] = useState(null);
  const starsRef = ref(storage, "real-video.mp4");
  useEffect(() => {
    getDownloadURL(starsRef).then((url) => {
      setUrl(url);
    }, []);
  });

  return <>{url !== null ? <MainBanner videourl={url} /> : <MainBanner />}</>;
};

export default Main;
