import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Experience = () => {
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
    <>
      <Helmet>
        <title>Experience | Abdallah Alqiran</title>
        <meta
          name="description"
          content="Explore the work experience of Abdallah Alqiran."
        />
      </Helmet>
      <section
        id="experience"
        className="text-center px-4 bg-secondary pt-12 pb-16"
      >
        <h1 className="text-3xl text-[#25c1dd] font-semibold w-fit mx-auto pb-1 tracking-wide drop-shadow-md mt-6">
          Experience
        </h1>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.97, ease: "easeOut" }}
          className="
  max-w-7xl mx-auto mt-6 space-y-6"
        >
          {data?.experiences?.map((ex, index) => (
            <div
              key={ex.id || index}
              className="bg-white dark:bg-[#1e1e1e] shadow-md rounded-xl p-4 space-y-4 border-l-4
             border-[#209191] text-left"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-[#27b1b1]">
                  {ex.experienceTitle}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {ex.date}
                </span>
              </div>

              <h4 className="text-md font-medium text-gray-600 dark:text-gray-300">
                {ex.company}
              </h4>

              <p
                className="text-sm md:text-[20px] font-semibold leading-relaxed text-gray-800
             dark:text-gray-400"
              >
                {ex.description}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Experience;
