"use client";

import useDebounce from "@/hooks/use-debounce";
import { BookImage } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
export function Photos({ photos, title }: { photos: string[]; title: string }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(1);
  const [scrollState, setScrollState] = useState<number>(0);
  const [containerWidth, setContainerWdith] = useState<number>(0);

  const delayState = useDebounce(scrollState, 300);

  console.log("containerWidth", containerWidth);
  console.log("scrollState",scrollState);
  console.log("delayState", delayState);

  const calculateCurrent = useMemo(() => {
    if (delayState === 0) {
      setCurrent(1);
    } else {
      setCurrent(Math.round(delayState / containerWidth) + 1);
    }
  }, [delayState]);

  const showPhotos = (photos: string) => {
    const show: any = document.getElementById(photos.toString()) as HTMLElement;

    if (show) {
      setOpenModal(true);
      show.showModal();
    }
  };

  const closeModal = () => {
    const show: any = document.getElementById(photos.toString()) as HTMLElement;

    if (show) {
      setOpenModal(false);
      show.close();
    }
  };

  useEffect(() => {
    const scrollContainers = document.querySelectorAll(
      ".scroll-container"
    ) as NodeListOf<HTMLElement>;
    const imgContainer = document.querySelector(
      ".img-container"
    ) as HTMLElement;
    let width = imgContainer.clientWidth;
    const prevBtns = document.querySelectorAll(
      ".prevBtn"
    ) as NodeListOf<HTMLElement>;
    const nextBtns = document.querySelectorAll(
      ".nextBtn"
    ) as NodeListOf<HTMLElement>;
    let scrollHorizontal: number;

    setContainerWdith(width);

    const handleResize = () => {
      width = imgContainer.clientWidth;
      setContainerWdith(width);
    };

    window.addEventListener("resize", handleResize);

    scrollContainers.forEach((scrollContainer) => {
      scrollContainer.scrollLeft = 0;
    });

    scrollContainers.forEach((scrollContainer, index) => {
      scrollContainer.addEventListener("scroll", (e) => {
        if (scrollHorizontal !== scrollContainer.scrollLeft) {
          scrollHorizontal = scrollContainer.scrollLeft;
          setScrollState(scrollHorizontal);
        }
      });
    });

    prevBtns.forEach((prevBtn, index) => {
      prevBtn.addEventListener("click", () => {
        scrollContainers[index].style.scrollBehavior = "smooth";
        scrollContainers[index].scrollLeft -= width;
      });
    });

    nextBtns.forEach((nextBtn, index) => {
      nextBtn.addEventListener("click", () => {
        scrollContainers[index].style.scrollBehavior = "smooth";
        scrollContainers[index].scrollLeft += width;
      });
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openModal]);

  return (
    <>
      <button
        className="btn btn-sm btn-outline border-slate-300 hover:border-none hover:text-gray-800 hover:bg-gray-200  rounded-sm space-x-2 h-2 items-center  text-[#083f99] font-bold text-xs"
        onClick={() => showPhotos(photos.toString())}
      >
        <BookImage size={16} />
        Photos
      </button>
      <dialog id={photos.toString()} className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-gray-200 justify-center p-0">
          <form method="dialog">
            <div className="flex justify-between items-center w-full bg-white p-3">
              <h3 className="font-bold text-lg">{title}</h3>
              <span
                onClick={() => closeModal()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </span>
            </div>
            <div className="w-full relative px-10">
              <span className="text-slate-500 absolute right-2 text-xs md:text-sm md:right-4">
                {current}/{photos.length}
              </span>
              <div className="scroll-container snap-mandatory snap-x w-full flex overflow-x-scroll">
                {photos.map((photo, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full snap-center flex-none img-container"
                    >
                      <img
                        src={photo}
                        alt="Image"
                        className="h-[500px] mx-auto"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                <span className="btn btn-ghost prevBtn">❮</span>
                <span className="btn btn-ghost nextBtn">❯</span>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
