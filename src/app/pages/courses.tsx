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
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-primary">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-destructive">Error happened!</p>
      </div>
    );

  return (
    <section id="courses" className="px-6 md:px-12 py-12 bg-background">
      <div className="max-w-[1536px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Courses
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative w-full px-4 md:px-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-6">
              {data?.courses?.map((course, index) => (
                <CarouselItem
                  key={course.id || index}
                  className="pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="h-full group relative"
                  >
                    <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative h-full bg-card text-card-foreground shadow-lg rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                          <GraduationCap className="w-8 h-8" />
                        </div>
                        <h2 className="text-xl font-bold leading-tight line-clamp-2">
                          {course.courseName}
                        </h2>
                      </div>
                      <p className="text-lg leading-relaxed text-muted-foreground font-medium flex-grow">
                        {course.courseDescription}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:flex -left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="md:flex -right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Courses;
