import { useUserdata } from "@/shared/components/firestore";
import { Button } from "@/shared/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Certificates = () => {
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

  const hasCertificates = Array.isArray(data?.certificates) && data.certificates.length > 0;
  
  return (
    <section id="certificates" className="px-6 md:px-12 py-12 bg-background">
      <div className="max-w-[1536px] mx-auto">
        {hasCertificates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Certificates
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>
        )}

        <div className="relative w-full px-4 md:px-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-6">
              {data?.certificates?.map((certificate, index) => (
                <CarouselItem
                  key={certificate.id}
                  className="pl-6 md:basis-1/2 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative h-full"
                  >
                    <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-card text-card-foreground shadow-lg rounded-2xl overflow-hidden flex flex-col h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={certificate.imageUrl}
                          loading="lazy"
                          alt={certificate.certificateName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-foreground mb-6 line-clamp-2 min-h-[3.5rem]">
                          {certificate.certificateName}
                        </h3>

                        <Link to={`/details/certificate/${certificate.id}`} className="mt-auto">
                          <Button
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl py-6 shadow-md transition-all active:scale-95"
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:flex -left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className=" md:flex -right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Certificates;