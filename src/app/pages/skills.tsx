import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Skills = () => {
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
    <section id="skills" className=" px-4 bg-secondary pt-10 pb-12 ">
      <h1
        className="text-3xl font-semibold text-[#25c1dd]
   w-fit mx-auto mb-6 tracking-wide drop-shadow-md"
      >
        Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-8xl mx-auto">
        {data?.skills?.map((skill, index) => (
          <motion.div
            key={skill.id || index}
            className="rounded-2xl p-6 bg-white dark:bg-[#1e1e1e]
        border border-[#25c1dd]/30 shadow-md hover:shadow-lg
        transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Star size={28} className="text-yellow-400" />
            <h3 className="text-base font-semibold text-center text-gray-700 dark:text-gray-300">
              {skill.skillName}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
