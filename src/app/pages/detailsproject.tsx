import { useUserdata } from "@/shared/components/firestore";
import { useParams } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { isLoading, error, data } = useUserdata();
  const { projectId } = useParams();

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

  const project = data?.projects?.find((p) => p.id === Number(projectId));

  if (!project) return <p>Project not found!</p>;

  return (
    <>
      <Helmet>
        <title>{project.projectName} | Abdallah Alqiran</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <div className="p-6 max-w-2xl mx-auto mt-[8%] space-y-7">
        <div className="w-full">
          <img
            src={project.image}
            loading="lazy"
            width={200}
            height={200}
            alt={project.projectName}
            className="w-full h-auto max-h-[600px] aspect-video object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#25c1dd] text-center">
            {project.projectName}
          </h2>

          <p className="text-sm md:text-lg  whitespace-pre-wrap text-gray-700 dark:text-gray-200 leading-relaxed border-l-4 border-[#209191] pl-4">
            {project.description}
          </p>

          <div className="flex justify-center">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Button
                className="group bg-[#006a6a] text-white px-6 mt-4 w-72 py-3 rounded-full shadow-lg 
          transition duration-300 flex items-center justify-center gap-2 border  
          border-transparent hover:border-[#25c1dd] hover:bg-white hover:text-[#25c1dd]"
              >
                Github
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
