import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";

const Education = () => {
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
    <section className="  px-6 bg-secondary pb-20 ">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl font-semibold text-[#25c1dd] tracking-wide drop-shadow-sm">
          Education
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      >
        {data?.education?.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
            No education data found.
          </p>
        ) : (
          <div className="max-w-5xl mx-auto space-y-6">
            {(data?.education ?? []).map(({ id, university, date, major }) => (
              <div
                key={id}
                className="p-6 rounded-xl border
                 border-[#25c1dd]   bg-white dark:bg-[#1e1e1e]  shadow-md transition duration-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-[#006a6a]">
                  {university}
                </h2>
                <p className="text-lg mt-2 dark:text-gray-300 font-medium">
                  {date}
                </p>
                <p className="mt-3 text-base dark:text-gray-300 font-semibold">
                  {major}
                </p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Education;
