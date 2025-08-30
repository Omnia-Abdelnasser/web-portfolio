import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { useState } from "react";

function isValidUrl(url?: string): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

const FreeContents = () => {
  const { isLoading, error, data } = useUserdata();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const hasContents =
    Array.isArray(data?.contentsTitle) && data.contentsTitle.length > 0;
  const handleAccordionClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="contentsTitle" className=" bg-secondary pt-12 pb-16 ">
      {hasContents && (
        <h1 className="text-3xl text-[#25c1dd] font-semibold w-fit mx-auto pb-1 tracking-wide drop-shadow-md mt-6">
          Free Contents
        </h1>
      )}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.97, ease: "easeOut" }}
        className="mt-6 px-4 max-w-7xl mx-auto"
      >
        <div className="space-y-4">
          {data?.contentsTitle?.map((contentTitle, idx) => (
            <div
              key={contentTitle.id}
              className="border border-[#25c1dd] rounded-xl bg-white/5"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-[#25c1dd]/10 transition"
                onClick={() => handleAccordionClick(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-semibold text-[#25c1dd]">
                  {contentTitle.contentTitle}
                </span>
                <span
                  className={`transition-transform ${openIndex === idx ? "rotate-90" : ""}`}
                >
                  ▶
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-4 pt-2 space-y-2 animate-fade-in">
                  {contentTitle.contents && contentTitle.contents.length > 0 ? (
                    contentTitle.contents.map((content) => (
                      <a
                        key={content.id}
                        href={content.contentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl font-normal text-[#27b1b1] block px-4 py-2 rounded text-gray-200 hover:text-[#25c1dd] transition font-medium ${!isValidUrl(content.contentUrl) ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}`}
                        onClick={(e) => {
                          if (!isValidUrl(content.contentUrl)) {
                            e.preventDefault();
                          }
                        }}
                      >
                        {content.contentDescription || content.contentUrl}
                      </a>
                    ))
                  ) : (
                    <div className="text-gray-400 italic">
                      No contents available.
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FreeContents;
