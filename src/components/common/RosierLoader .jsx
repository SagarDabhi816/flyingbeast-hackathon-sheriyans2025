import { motion } from "framer-motion";

const RosierLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800"
      >
        ROSIER
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="mt-2 text-md sm:text-base md:text-lg text-gray-600"
      >
        Experience Purity. Taste Tradition.
      </motion.p>
    </motion.div>
  );
};

export default RosierLoader;
