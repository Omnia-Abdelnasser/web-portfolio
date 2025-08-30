import { useUserdata } from "@/shared/components/firestore";
import { useParams } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { isLoading, error, data } = useUserdata();
  const { certificateId } = useParams();

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

  const certificate = data?.certificates?.find(
    (p) => p.id === Number(certificateId),
  );

  if (!certificate) return <p>certificate not found!</p>;

  return (
    <>
      <Helmet>
        <title>{certificate.certificateName} | Abdallah Alqiran</title>
        <meta name="description" content={certificate.description} />
      </Helmet>
      <div className="p-6 max-w-2xl mx-auto mt-[8%] space-y-7">
        <div className="w-full">
          <img
            src={certificate.imageUrl}
            loading="lazy"
            width={200}
            height={200}
            alt={certificate.certificateName}
            className="w-full h-auto max-h-[600px] aspect-video object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#25c1dd] text-center">
            {certificate.certificateName}
          </h2>

          <p className="text-sm md:text-lg  whitespace-pre-wrap text-gray-700 dark:text-gray-200 leading-relaxed border-l-4 border-[#209191] pl-4">
            {certificate.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
