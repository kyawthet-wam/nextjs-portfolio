import { ArrowBigUp } from "lucide-react";
import { Work } from "@/types/definitions";

export function WorkTile({ work }: { work: Work }) {
  return (
    <div
      key={work.duration}
      className="relative flex items-center justify-between md:justify-normal min-w-28 md:odd:flex-row-reverse group is-active"
    >
      <div className="flex items-center shadow-lg justify-center w-10 h-10 space-y-20 rounded-full border border-white bg-[#083f99] group-[.is-active]:bg-[#083f99] text-[#083f99] group-[.is-active]:text-emerald-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <ArrowBigUp size={16} color="#f4f4f4" />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-2.5rem)] p-4 shadow-lg rounded border border-slate-200">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-sm text-start text-slate-900">
            {work.title}
          </div>
          <time className="font-sans text-xs font-semibold text-[#083f99] whitespace-nowrap">
            {work.duration}
          </time>
        </div>
        <a href={work.link} target="_blank">
          <div className="text-xs text-slate-500 text-start  font-semibold hover:text-[#083f99] tooltip">
            {work.place}
          </div>
        </a>
      </div>
    </div>
  );
}
