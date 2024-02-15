"use client";

import { BookImage } from "lucide-react";
import { useState } from "react";

export function Photos({ photos }: { photos: string[] }) {

    const [ current, setCurrent ] = useState<number>(0);

    const showPhotos = (photos: string) => {
        const show:any = document.getElementById(photos.toString()) as HTMLElement;

        if(show) {
          show.showModal();
        } 
    }

    const prevBtn = () => {
      if(current === 0) {
        setCurrent(photos.length -1);
      } else {
        setCurrent(prev => prev - 1);
      }
    }

    const nextBtn = () => {
      if(current === photos.length -1) {
        setCurrent(0);
      } else {
        setCurrent(prev => prev + 1);
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
            <div className="w-full">
              <div className="sm:flex justify-center hidden">
                <img
                  src={photos[current]}
                  alt="Image"
                  className="h-[500px] object-center" 
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <span onClick={()=> prevBtn()} className="btn btn-ghost">
                    ❮
                    </span>
                    <span onClick={()=> nextBtn()} className="btn btn-ghost">
                    ❯
                    </span>
                  </div>
              </div>
              <div className="flex justify-center sm:hidden">
                <div className="max-h-96 overflow-y-auto">
                  {photos.map((photo, index) => (
                    <div className="flex justify-center">
                      <img 
                        key={index} 
                        src={photo} 
                        alt={`Image ${index + 1}`} 
                        className="mb-5 h-[400px]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="carousel w-full">
              {photos.map((photo) => (
                 <div key={photo.toString()} className="flex custom-carousel-item relative w-full m-0 justify-center"  
                 style={{
                  transform: `${openModal ? "translateX(0)" : `translateX(-${xPos}%)`}`
                  }}
                 >
                 <img
                    src={photo}
                    alt="Image"
                    className="h-[500px] object-center"
                    
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <span onClick={()=> prevBtn()} className="btn btn-ghost">
                    ❮
                    </span>
                    <span onClick={()=> nextBtn()} className="btn btn-ghost">
                    ❯
                    </span>
                  </div>
              </div>
               ))}
            </div> */}
          </form>
        </div>
      </dialog>
    </>
  );
}
