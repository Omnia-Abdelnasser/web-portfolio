import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Technology = () => {
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
        <title>Technologies | Abdallah Alqiran</title>
        <meta
          name="description"
          content="Explore the technologies and tools used by Abdallah Alqiran."
        />
      </Helmet>
      <section className=" px-4  pt-14 pb-14 bg-secondary ">
        <h1
          className="text-3xl font-semibold
      text-[#25c1dd] w-fit mx-auto mb-6 pb-1 tracking-wide drop-shadow-md"
        >
          Technologies & Tools
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto ">
          {data?.technologiesAndTools?.map((techs, index) => (
            <motion.div
              key={techs.id || index}
              className="p-6 rounded-2xl shadow-md transition duration-300 
    border border-[#25c1dd]/30 bg-white dark:bg-[#1e1e1e]
    hover:shadow-xl hover:border-[#25c1dd] group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 13 }}
            >
              <h2 className="text-xl font-semibold mb-3 text-[#209191]  flex items-center gap-2">
                <Settings size={20} className="text-[#209191] " />
                {techs.technologyTitle}
              </h2>

              <ul className="space-y-2">
                {techs.technologies.map((tech, idx) => (
                  <li
                    key={tech.id || idx}
                    className="group flex items-center text-lg leading-relaxed transition-transform 
          duration-300 hover:translate-x-2"
                  >
                    <span className="mr-2 text-[#25c1dd] transition-transform duration-300 group-hover:translate-x-1">
                      &raquo;
                    </span>
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1
         dark:text-gray-300 text-gray-700"
                    >
                      {tech.technologyName}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Technology;
