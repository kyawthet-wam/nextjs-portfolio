import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./storage";

export async function ProfileImage() {
  return (
    <div className="px-1 w-full">
      <img
        src={await getDownloadURL(ref(storage, "images/ktw/ktw-4.jpg/"))}
        alt="profile"
        className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full border border-white object-cover shadow-lg"
      />
    </div>
  );
}
