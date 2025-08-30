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

  const hasCertificates =
    Array.isArray(data?.certificates) && data.certificates.length > 0;
  return (
    <div id="certificates" className=" bg-secondary pt-12 pb-16 ">
      {hasCertificates && (
        <h1 className="text-3xl font-semibold text-[#25c1dd] w-fit mx-auto pt-6 pb-1 tracking-wide drop-shadow-md">
          Certificates
        </h1>
      )}

      <div className="mt-10 px-4">
        <div className="relative w-full px-8">
          <Carousel className="w-full">
            <CarouselPrevious />
            <CarouselContent className="-ml-4">
              {data?.certificates?.map((certificate, index) => (
                <CarouselItem
                  key={certificate.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <motion.div
                    className="rounded-2xl shadow-md overflow-hidden flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <img
                      src={certificate.imageUrl}
                      loading="lazy"
                      width={320}
                      height={192}
                      alt={`certificate ${certificate.id}`}
                      className="w-full aspect-video object-cover"
                    />

                    <div className="p-4 mt-auto">
                      <h3 className="text-[#25c1dd] font-semibold mb-4 text-lg">
                        {certificate.certificateName}
                      </h3>

                      <Link to={`/details/certificate/${certificate.id}`}>
                        <Button
                          className="bg-[#006a6a] text-gray-300 w-full px-6 py-2 rounded-xl shadow-lg 
                          transition duration-300 flex items-center gap-2 border text-bolder
                          border-transparent hover:border-[#25c1dd] hover:bg-gray-300
                           hover:text-[#25c1dd] mb-2"
                        >
                          More Details
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
