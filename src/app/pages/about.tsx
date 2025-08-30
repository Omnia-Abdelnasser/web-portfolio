import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";

const About = () => {
  const { isLoading, error, data } = useUserdata();
  if (isLoading)
    return (
      <p
        className=" bg-secondary text-center text-2xl font-semibold
   text-[#25c1dd] animate-pulse"
      >
        Loading...
      </p>
    );
  if (error)
    return (
      <p
        className="text-center text-2xl font-semibold  animate-pulse
   text-red-500 bg-secondary"
      >
        Error happened!
      </p>
    );

  return (
    <section id="about" className=" text-center  px-4 bg-secondary py-20  ">
      <div className="flex items-center justify-center gap-2 mb-4">
        <h1
          className="text-3xl text-[#25c1dd] font-semibold 
        w-fit mx-auto    pb-1 tracking-wide drop-shadow-md mt-16"
        >
          About Me
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="
      sm:p-6   
    transition-colors duration-500
    w-full max-w-8xl mx-auto 
  "
      >
        <p
          className="bg-white dark:bg-[#1e1e1e] text-sm md:text-[20px] font-semibold leading-relaxed text-gray-800
             
   shadow-md rounded-xl p-8 space-y-4 border-l-4
             border-[#209191] text-left whitespace-pre-wrap
             dark:text-gray-300 "
        >
          {data?.about}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
