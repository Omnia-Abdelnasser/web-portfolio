import { useUserdata } from "@/shared/components/firestore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Courses = () => {
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
      <section id="courses" className="pt-10 pb-14 px-4 bg-secondary">
        <h1 className="text-3xl font-semibold text-[#25c1dd] w-fit mx-auto mb-6 pb-1 tracking-wide drop-shadow-md">
          Courses
        </h1>

        <div className="relative w-full px-8">
          <Carousel className="w-full">
            <CarouselPrevious />
            <CarouselContent className="-ml-4">
              {data?.courses?.map((course, index) => (
                <CarouselItem
                  key={course.id || index}
                  className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    className="h-full rounded-2xl 
                   dark:text-gray-300 shadow-lg p-6 hover:scale-[1.02] 
                   transition-transform duration-300
                   border-2 border-[#209191] "
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.93 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3 text-[#209191]  ">
                      <GraduationCap className="w-8 h-8 dark:text-white drop-shadow-md" />
                      <h2 className=" text-md md:text-xl font-bold">
                        {course.courseName}
                      </h2>
                    </div>
                    <p
                      className="text-md md:text-lg font-semibold
                   leading-relaxed text-gray-600 dark:text-gray-300 "
                    >
                      {course.courseDescription}
                    </p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Courses;
