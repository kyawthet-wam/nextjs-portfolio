"use client";

import { BookImage } from "lucide-react";

export function Photos({ photos }: { photos: string[] }) {

    const showPhotos = (photos: string) => {
        const show:any = document.getElementById(photos.toString()) as HTMLElement;

        if(show) {
            show.showModal();
        } 
    }
    
  return (
    <>
      <button
        className="btn btn-sm btn-outline border-slate-300 hover:border-none hover:bg-blue-200 hover:text-sky-600  rounded-sm space-x-2 h-2 items-center  text-sky-600 font-bold text-xs"
        onClick={() => showPhotos(photos.toString())}
      >
        <BookImage size={16} />
        Photos
      </button>
      <dialog id={photos.toString()} className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-gray-200 justify-center">
          <h3 className="font-bold text-lg">Hello!</h3>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="carousel w-full">
              {photos.map((photo, index) => {
                return (
                  <div
                    key={index.toString()}
                    id={index.toString()}
                    className="carousel-item relative w-full m-0  flex justify-center"
                  >
                    <img
                      src={photo}
                      alt="Image"
                      className="h-[500px] object-center"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                      <a
                        href={`#${index == 0 ? index : index - 1}`}
                        className="btn btn-ghost"
                      >
                        ❮
                      </a>
                      <a
                        href={`#${index == index - 1 ? 0 : index + 1}`}
                        className="btn btn-ghost"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
