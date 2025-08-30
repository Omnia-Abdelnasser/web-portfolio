import { ScrollToTop } from "@/shared/components/scroll";
import { ArrowUpToLine } from "lucide-react";

export default function Scroll() {
  return (
    <ScrollToTop
      minHeight={500}
      scrollTo={0}
      className="fixed right-4 bottom-4
       z-50 bg-[#25c1dd] hover:bg-white text-white
        hover:text-[#006a6a] border hover:border-[#006a6a] shadow-lg p-2 rounded-full"
    >
      <ArrowUpToLine className="w-10 h-10" />
    </ScrollToTop>
  );
}
