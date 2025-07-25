import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LuMilk } from "react-icons/lu";
import { GiFarmer } from "react-icons/gi";
import { MdAddTask } from "react-icons/md";
import Footer from "../../components/common/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayerImage from "/Ghee.webp";

const Home = () => {
  const videoRef = useRef(null);
  const [sourceLoaded, setSourceLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      icon: <GiFarmer size={30} />,
      title: "Farm Fresh",
      description:
        "Sourced from grass-fed Gir cows, ensuring each drop is pure and full of natural nutrients.",
    },
    {
      icon: <MdAddTask size={30} />,
      title: "Artisan Method",
      description:
        "Hand-churned in small batches using the traditional Bilona process for premium quality.",
    },
    {
      icon: <LuMilk size={30} />,
      title: "Rich Nutrition",
      description:
        "High in omega-3, vitamins & antioxidants—crafted for daily nourishment and robust wellness..",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Site Communication Radios",
      price: "$39.99",
      rating: 5,
      image:
        "https://www.rosierfoods.com/cdn/shop/files/6FFCD86B-3301-42A8-9CEF-86B1EB6B0C43.jpg?v=1746730912&width=823", // Replace with your image path
    },
    {
      id: 2,
      name: "Electric Rebar Cutter Machine",
      price: "$69.99",
      rating: 4.5,
      image: "/products/cutter.png",
    },
    {
      id: 3,
      name: "Heavy-Duty Angle Grinder",
      price: "$79.99",
      rating: 5,
      image: "/products/grinder.png",
    },
  ];

  const categoryData = [
    {
      image: "/Sliderimg/Wheat.png",
      buttonText: "Khapli Atta",
    },
    {
      image: "/Sliderimg/Nut2.png",
      buttonText: "Nut Butters",
    },
    {
      image: "/Sliderimg/Oil.png",
      buttonText: "Oils",
    },
    {
      image: "/Sliderimg/Honey.png",
      buttonText: "Raw Honey",
    },
    {
      image: "/Sliderimg/Pooja.png",
      buttonText: "Pooja Essentials",
    },
    {
      image: "/Sliderimg/Bar.png",
      buttonText: "Protein Bars",
    },
    {
      image: "/Sliderimg/Ghee.png",
      buttonText: "Gir Cow A2 ghee",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function navigateTo(location) {
    navigate(location);
  }

  useEffect(() => {
    setSourceLoaded(true); // Lazy load on mount
  }, []);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          {sourceLoaded && <source src="/Homevideo.mov" type="video/mp4" />}
        </video>

        <motion.div
          className="w-[120px] h-[100px] flex items-center justify-center !text-white absolute top-[90%] left-[83%] sm:left-[93%] -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="
              M 100,100
              m -80,0
              a 80,80 0 1,1 160,0
              a 80,80 0 1,1 -160,0
            "
              />
            </defs>
            <text fill="#fff" fontSize="17" fontWeight="600" letterSpacing="2">
              <textPath
                href="#circlePath"
                startOffset="0"
                textLength="502"
                lengthAdjust="spacingAndGlyphs"
              >
                &nbsp;Purity Guaranteed • Purity Guaranteed •
              </textPath>
            </text>
          </svg>
        </motion.div>

        <div className="absolute top-2/4 px-8">
          <h1 className="text-3xl ">
            Crafted by Nature. Perfected by Tradition.
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => navigateTo("/products")}
            className="bg-[#DFC005] text-white px-3 py-3 rounded-lg shadow-lg mt-2 hover:bg-yellow-700 transition duration-300 font-semibold text-md"
            // className="px-6 py-3 filter  text-white rounded-full font-semibold shadow-xl hover:shadow-lg focus:outline-none text-xl"
          >
            Explore Products
          </motion.button>
        </div>
      </div>

      <section className="!text-white py-10 !px-8 !sm:px-10 !md:px-12">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 ">
              Pure Gold A2 Ghee
            </h1>
            <p className="text-[#f2f2f2] text-base sm:text-lg leading-relaxed">
              WE BELIEVE <span className="font-bold">A2 GHEE</span> IS ROOTED IN
              AGE-OLD TRADITIONS,{" "}
              <span className="font-bold"> HANDCRAFTED FROM GIR COW</span>
              MILK USING THE ANCIENT
              <span className="font-bold"> BILONA METHOD.</span> ROSIER STANDS
              FOR AUTHENTICITY, WELLNESS, AND THE TRUE TASTE OF NATURE. TRUSTED
              BY FAMILIES. CELEBRATED BY CONNOISSEURS.
            </p>

            {/* Feature Icons */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-8 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex justify-center text-green-700 mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-black">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center ">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(199,167,87,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                // onClick={onClick}
                className="cursor-pointer px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base relative z-10
      bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 shadow-md border-none"
              >
                <span className="relative z-20">Reserve Yours </span>
              </motion.button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={PlayerImage}
              alt="Tennis Player"
              className="w-[80%] sm:w-[70%] md:w-[90%] rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col py-10 !px-8 !sm:px-10 !md:px-12 text-b bg-white text-black">
        <h1 className=" text-2xl">The Rosier Experience</h1>
        <div className="w-[15%] pt-2 border-b-2 border-gray-300 mt-2"></div>
      </section>

      <section>
        <div className="w-full px-4 py-8 max-w-[90%] mx-auto !text-black ">
          <Slider {...settings}>
            {categoryData.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-[#F7F5ED] h-full rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.buttonText}
                    className="w-full h-96 !object-cover object-center rounded-xl"
                  />
                  <div className="p-4 text-center">
                    <button className="px-4 py-2 rounded hover:bg-yellow-400 hover:text-white transition">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-transparent">
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ x: "-100%" }}
              exit={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="mt-4 px-6 py-2 rounded-full bg-primary text-white flex justice"
          onClick={() => setShow(!show)}
        >
          Show More
        </button>
      </section>
    </>
  );
};

export default Home;
