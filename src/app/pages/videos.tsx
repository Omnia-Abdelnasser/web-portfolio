import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { useState } from "react";

// Helper to extract YouTube embed URL
function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/,
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

const Videos = () => {
  const { isLoading, error, data } = useUserdata();
  if (isLoading)
    return (
      <p className=" bg-secondary text-center text-2xl font-semibold text-[#25c1dd] animate-pulse">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-2xl font-semibold  animate-pulse text-red-500 bg-secondary">
        Error happened!
      </p>
    );

  const hasVideos = Array.isArray(data?.videos) && data.videos.length > 0;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleAccordionClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="videos" className=" bg-secondary pt-12 pb-16 ">
      {hasVideos && (
        <h1 className="text-3xl text-[#25c1dd] font-semibold w-fit mx-auto pb-1 tracking-wide drop-shadow-md mt-6">
          Videos Presentation
        </h1>
      )}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.97, ease: "easeOut" }}
        className="mt-6 px-4 max-w-7xl mx-auto"
      >
        <div className="space-y-4">
          {data?.videos?.map(
            (
              video: { id: number; videoTitle?: string; videoUrl?: string },
              idx: number,
            ) => {
              const embedUrl = getYouTubeEmbedUrl(video.videoUrl || "");
              return (
                <div
                  key={video.id}
                  className="border border-[#25c1dd] rounded-xl bg-white/5"
                >
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-[#25c1dd]/10 transition"
                    onClick={() => handleAccordionClick(idx)}
                    aria-expanded={openIndex === idx}
                  >
                    <span className="text-lg font-semibold text-[#25c1dd]">
                      {video.videoTitle || `Video #${idx + 1}`}
                    </span>
                    <span
                      className={`transition-transform ${openIndex === idx ? "rotate-90" : ""}`}
                    >
                      ▶
                    </span>
                  </button>
                  {openIndex === idx && (
                    <div className="px-8 pb-4 pt-2 animate-fade-in w-full flex justify-center">
                      {embedUrl ? (
                        <div className="w-full max-w-2xl aspect-video rounded-lg shadow-lg overflow-hidden bg-black">
                          <iframe
                            src={embedUrl}
                            title={
                              video.videoTitle || `YouTube video ${video.id}`
                            }
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full min-h-[200px] aspect-video"
                          ></iframe>
                        </div>
                      ) : (
                        <div className="text-red-400 italic">
                          Invalid YouTube URL
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            },
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Videos;
