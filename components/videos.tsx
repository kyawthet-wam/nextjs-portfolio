"use client";

import { FileVideo2 } from "lucide-react";
import { useRef } from "react";

export function Video({
  video,
  projTitle,
}: {
  video: string;
  projTitle: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const showVideo = (video: string) => {
    const show: any = document.getElementById(video) as HTMLElement;

    if (show) {
      show.showModal();
    }
  };

  const closeModal = () => {
    const show: any = document.getElementById(video) as HTMLElement;

    if (show && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      show.close();
    }
  };
  return (
    <>
      <button
        onClick={() => showVideo(video)}
        className="btn btn-sm btn-outline border-slate-300 hover:border-none hover:bg-blue-200 hover:text-sky-600  rounded-sm h-2 items-center  text-sky-600 font-bold text-xs"
      >
        <FileVideo2 size={16} />
        Video
      </button>
      <dialog id={video} className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-gray-200 justify-center">
          <h3 className="font-bold text-lg text-black">{projTitle}</h3>

          <form method="dialog">
            <span
              onClick={() => closeModal()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </span>
            <div className="w-full flex justify-center">
              <video ref={videoRef} className="h-[500px]" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
