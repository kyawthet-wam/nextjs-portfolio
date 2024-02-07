import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="ml-10 mt-10">
        <div className="px-1 w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="Pic"
            className="h-[330px] w-[330px] rounded-full"
          />
        </div>
        <h1 className="relative text-2xl text-black font-bold pt-10">
          About Me
        </h1>
      </div>
    </div>
  );
}
