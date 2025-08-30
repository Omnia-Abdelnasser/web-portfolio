import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/,
  );
  return match ? match[1] : null;
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
      <p className="text-center text-2xl font-semibold animate-pulse text-red-500 bg-secondary">
        Error happened!
      </p>
    );

  const hasVideos = Array.isArray(data?.videos) && data.videos.length > 0;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({}); // لتتبع الفيديوهات اللي اشتغلت

  const handleAccordionClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Helmet>
        <title>Videos | Abdallah Alqiran</title>
        <meta
          name="description"
          content="Watch the videos of Abdallah Alqiran."
        />
      </Helmet>
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
                const videoId = getYouTubeId(video.videoUrl || "");
                const isOpen = openIndex === idx;
                const isLoaded = loaded[idx] || false;

                return (
                  <div
                    key={video.id}
                    className="border border-[#25c1dd] rounded-xl bg-white/5"
                  >
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-[#25c1dd]/10 transition"
                      onClick={() => handleAccordionClick(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-semibold text-[#25c1dd]">
                        {video.videoTitle || `Video #${idx + 1}`}
                      </span>
                      <span
                        className={`transition-transform ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-8 pb-4 pt-2 w-full flex justify-center">
                        {videoId ? (
                          <div className="w-full max-w-2xl aspect-video rounded-lg shadow-lg overflow-hidden bg-black">
                            {!isLoaded ? (
                              <button
                                className="relative w-full h-full"
                                onClick={() =>
                                  setLoaded((prev) => ({
                                    ...prev,
                                    [idx]: true,
                                  }))
                                }
                              >
                                <img
                                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                  alt={video.videoTitle || "Video thumbnail"}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl">
                                  ▶
                                </div>
                              </button>
                            ) : (
                              <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title={
                                  video.videoTitle ||
                                  `YouTube video ${video.id}`
                                }
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                              ></iframe>
                            )}
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
    </>
  );
};

export default Videos;
