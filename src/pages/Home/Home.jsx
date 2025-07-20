import { useEffect, useRef, useState } from "react";

const Home = () => {
  const videoRef = useRef(null);
  const [sourceLoaded, setSourceLoaded] = useState(false);

  useEffect(() => {
    setSourceLoaded(true); // Lazy load on mount
  }, []);
  return (
    <>
      <div className=" w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          {sourceLoaded && (
            <source src="../../../public/Homevideo.mov" type="video/mp4" />
          )}
        </video>
      </div>
    </>
  );
};

export default Home;
