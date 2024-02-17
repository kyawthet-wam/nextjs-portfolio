"use client";

import { BookImage } from "lucide-react";
import { useEffect, useState } from "react";
export function Photos({ photos }: { photos: string[] }) {

    const [ openModal, setOpenModal ] = useState<boolean>(false);

    const showPhotos = (photos: string) => {
        const show:any = document.getElementById(photos.toString()) as HTMLElement;

        if(show) {
          setOpenModal(true);
          show.showModal();
        } 
    }

    const closeModal = () => {
      const show:any = document.getElementById(photos.toString()) as HTMLElement;

        if(show) {
          setOpenModal(false);
          show.close();
        } 
    } 

    useEffect(() => {

      const scrollContainers = document.querySelectorAll(".scroll-container") as NodeListOf<HTMLElement>; 
      const imgContainer = document.querySelector(".img-container") as HTMLElement;
      let width = imgContainer.clientWidth;
      const prevBtns = document.querySelectorAll(".prevBtn") as NodeListOf<HTMLElement>;
      const nextBtns = document.querySelectorAll(".nextBtn") as NodeListOf<HTMLElement>;

      const handleResize = () => {
        width = imgContainer.clientWidth;
      }

      window.addEventListener('resize', handleResize);

      prevBtns.forEach((prevBtn,index) => {
        prevBtn.addEventListener("click", () => {
          scrollContainers[index].style.scrollBehavior = "smooth";
          scrollContainers[index].scrollLeft -= width;
        })
      })

      scrollContainers.forEach((scrollContainer) => {
       scrollContainer.scrollLeft = 0;
      })
      
      nextBtns.forEach((nextBtn,index) => {
        nextBtn.addEventListener("click", () => {
          scrollContainers[index].style.scrollBehavior = "smooth";
          scrollContainers[index].scrollLeft += width;
        })
      })


      return () => {
        window.removeEventListener('resize', handleResize);
      }
    },[openModal]);

    
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
          <div className="modal-box w-11/12 max-w-5xl bg-gray-200 justify-center p-0">

          <form method="dialog">
            <div className="flex justify-between items-center w-full bg-white p-3">
              <h3 className="font-bold text-lg">Hello!</h3>
              <span onClick={() => closeModal()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </span>
            </div>
            <div className="w-full px-10">
              <div className="scroll-container w-full flex overflow-x-scroll">
                {photos.map((photo) => {
                  return (  
                    <div className="w-full flex-none img-container">
                      <img 
                        src={photo}
                        alt="Image"
                        className="h-[500px] mx-auto"
                      />
                  </div>
                  )
                })}
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                <span className="btn btn-ghost prevBtn">
                  ❮
                </span>
                <span className="btn btn-ghost nextBtn">
                  ❯
                </span>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
