
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RosierLoader from "../components/common/RosierLoader ";
// import RosierLoader from "./components/RosierLoader";

function layout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 sec loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <RosierLoader />;
  return (
    // <div className="layout sm:mx-12 m-5">
    //   <div>
    //     <Header />
    //   </div>
    //   <div className="content dark">
    //     <Outlet />
    //   </div>
    //   <div>
    //     <Footer />
    //   </div>
    // </div>
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default layout;
