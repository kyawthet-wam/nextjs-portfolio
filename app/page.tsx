import { projects, works, dover } from "@/types/definitions";
import { ProjectCard } from "@/components/project_card";
import { Footer } from "@/components/footer";
import { WorkTile } from "@/components/work_tile";
import { SkillBadge } from "@/components/skill_badge";
import firebase from "@/config/firebase_config";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { Suspense, useState } from "react";
import { CardSkeleton, ProfileSkeleton } from "@/components/skeleton";
import NavBar from "@/components/nav_bar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <div className="flex">
          <div className="mr-2 lg:col-span-2">
            <div
              id="about"
              className="relative text-2xl text-[#083f99] font-bold pt-10"
            >
              About Me
            </div>
            <div className="relative text-sm text-slate-500 font-semibold pt-2">
              I am Kyaw Thet Wam, Mobile Developer from Mandalay, Myanmar.
            </div>
            <div className="max-w-5xl text-justify text-slate-600 text-sm whitespace-normal py-8">
              Experienced mobile developer with a proven track record of
              creating polished cross-platform mobile applications using
              Flutter. With three plus years of hands-on experience, I am able
              to deliver high-quality, performant apps for both iOS and Android.
              My focus on clean code, efficient UI/UX design, and collaboration
              with cross-functional teams has consistently contributed to
              successful project outcomes. My dedication to staying updated with
              industry trends ensures I utilize the latest tools and techniques.
              With a passion for crafting exceptional user experiences, I am
              committed to contributing to your mobile app projects' success.
            </div>
          </div>
          <Suspense fallback={<ProfileSkeleton />}>
            <ProfileImage />
          </Suspense>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col md:col-span-1 lg:col-span-1 gap-12">
            <div id="education" className="flex flex-col gap-2">
              <div className="relative text-xl text-[#083f99] font-semibold">
                Education
              </div>
              <div className="relative text-slate-500 font-semibold text-sm">
                B.E. (Hons) in Computer Science<br></br> Myanmar Institute of
                Information Technology
              </div>
            </div>
          </div>
          <div id="skills" className="grid grid-flow-col md:grid-flow-row">
            <div className="col-span-2 md:col-span-2 lg:col-span-4 gap-2 space-y-2">
              <div className="relative text-xl text-[#083f99] font-bold">
                Skills
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Flutter" />
                <SkillBadge skill="Dart" />
                <SkillBadge skill="Java" />
                <SkillBadge skill="Python" />
                <SkillBadge skill="NextJs" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Firebase" />
                <SkillBadge skill="Html" />
                <SkillBadge skill="CSS" />
                <SkillBadge skill="SQlite" />
                <SkillBadge skill="Git" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Problem Solving" />
                <SkillBadge skill="Communication" />
                <SkillBadge skill="Teamwork" />
              </div>
              {/* <div className="flex flex-row gap-2">
                <SkillBadge skill="Communication" />
                <SkillBadge skill="Teamwork" />
              </div> */}
            </div>
          </div>
        </div>
        <div
          id="experience"
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <div className="flex flex-col gap-2 pt-10">
            <div className="relative text-xl text-[#083f99] font-bold">
              Experience
            </div>
            <div className="relative text-slate-500 font-semibold text-sm">
              I have 3+ years of experience in Software Development
            </div>
            <div className="pt-10 space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#083f99] before:to-[#083f99]">
              {works.toReversed().map((work) => (
                <WorkTile key={work.title} work={work} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="mx-0 p-1 text-center text-white font-sans font-bold text-lg bg-[#083f99]"
      >
        Projects
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <Projects />
      </Suspense>
      <Footer />
    </div>
  );
}

export async function ProfileImage() {
  return (
    <div className="px-1 w-full">
      <img
        src={await getDownloadURL(ref(storage, "images/ktw/ktw-4.jpg/"))}
        alt="profile"
        className="h-[300px] w-[300px] rounded-full border border-white object-cover shadow-lg"
      />
    </div>
  );
}

export async function Projects() {
  const projects = await getProjects();
  return (
    <div>
      <div className="mx-10 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

const storage = getStorage(
  firebase.getApp(),
  "gs://my-portfolio-9760a.appspot.com"
);

export async function getProjects() {
  const [
    accPhotos,
    lz,
    gate,
    dict,
    yc,
    pos,
    deli,
    atmd,
    luckyXd,
    fu,
    dover,
    goldSell,
    fuDashboardVd,
    fuClientVd,
  ] = await Promise.all([
    getImageUrls("acc"),
    getImageUrls("lz"),
    getImageUrls("gate"),
    getImageUrls("dict"),
    getImageUrls("yc"),
    getImageUrls("pos"),
    getImageUrls("deli"),
    getImageUrls("atmd"),
    getImageUrls("luckyxd"),
    getImageUrls("fu"),
    getImageUrls("dover"),
    getImageUrls("gold_sell"),
    getDownloadURL(ref(storage, "videos/client.MP4/")),
    getDownloadURL(ref(storage, "videos/dashboard.mp4/")),
  ]);

  return [
    {
      title: "E-commerce Dashboard",
      image: fu[fu.length - 1],
      description:
        "Sales Analystics , Inventory Management, Customer Relationship Management,Order Fulfillment, Financial Reporting ,User-Friendly Interface , Customization Options.",
      video: fuDashboardVd,
    },
    {
      image: fu[0],
      title: "E-commerce",
      description:
        "Jewellery ordering system containing manual payment,ordertracking, appointment booking and so on.",
      video: fuClientVd,
    },
    {
      image: lz[lz.length - 1],
      title: "Lazy Learning",
      description:
        "A learning resource app for Myanmar K-12 high school students. Contains over 19 years of old question papers from 2002 to the latest 2020 Matriculation Exam.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.lazydev.lazylearning",
      photos: lz,
    },
    {
      image: gate[gate.length - 1],
      title: "Receipt system for Car Gate",
      description:
        "Managing parcel deliveries with this app, seamlessly recording customer information and generating instantreceipts for a smooth and efficient shipping experience.",
      photos: gate,
    },
    {
      image: dict[dict.length - 1],
      title: "Dictionary",
      description:
        "Dive into the language world with this comprehensive dictionary app, offering dualUS and British pronunciations, all powered by a reliable open source SQLite database withoutinternet connection.",
      photos: dict,
    },
    {
      image: yc[yc.length - 1],
      title: "YC Fitness",
      description:
        "Fitness app which is accessible by specific member levels including nutrition plan, workouts and water level. This app contains social media platform like facebook with chatting, video call and notifications.",

      appStoreLink: "https://apps.apple.com/us/app/yc-fitness/id1666451656",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.yc_fitness&pli=1",
      photos: yc,
    },
    {
      image: accPhotos[accPhotos.length - 1],
      title: "Finance",
      description:
        "User-friendly expense tracking app, allowing users to effortlessly record and categorize expenses,resulting in improved financial awareness.",
      photos: accPhotos,
    },
    {
      image: pos[0],
      title: "New Empire POS (Web,Mobile)",
      description:
        "A cloud-based POS system into a retail environment, improving inventory management, and reducing checkouttimes",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.newempire.pos",
      photos: pos,
    },
    {
      image: deli[deli.length - 1],
      title: "Logistic Management",
      description:
        "Customer can check his order, route information and so on. Employee app with different employee roles containing route order management,route management, driver managementfor different routes, scan methods for orders, print service with both receipts and barcode labels, expense, customers, and so on.",
      photos: deli,
    },
    {
      image: atmd[0],
      title: "Aungthamardi - Customer",
      description:
        "Aung Thamardi Customer Application is dedicated forthe customers of Aung ThamardiGold&Jewellery shop for enhancing customer satisfaction.",
      appStoreLink:
        "https://apps.apple.com/us/app/aung-thamardi-customer/id6450292142",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=atmd.app.customer",
      photos: atmd,
    },
    {
      image: goldSell[0],
      title: "Aungthamardi - Gold Sell",
      description:
        "Aung ThamardiGold Sale App is an internal used application to coverthe gems and jewelry selling processes for Aung Thamardi Employees.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=atmd.app.goldsell",
      photos: goldSell,
    },
    {
      image: luckyXd[0],
      title: "LuckyXD",
      description:
        "To streamline and optimize the operations of businesses involved in international trade and commerce",
      photos: luckyXd,
    },
    {
      image: dover[dover.length - 1],
      title: "Dover",
      description:
        "Water management system from local water factory including daily sales across agents and factory, managing water bottles, income, expense and tracking water bottle based on customer.",
      photos: dover,
      webLink: "https://host-dover.web.app",
    },
  ];
}

export async function getImageUrls(folderName: string, type = "images") {
  const listRef = ref(storage, `${type}/${folderName}/`);
  const tmp: string[] = [];

  const allRef = await listAll(listRef);
  for (let index = 0; index < allRef.items.length; index++) {
    const itemRef = allRef.items[index];
    const url = await getDownloadURL(ref(storage, itemRef.fullPath));
    tmp.push(url);
  }

  return tmp;
}

export async function getVideoUrls(folderName: string) {
  return await getDownloadURL(ref(storage, "videos/client.MP4/"));
}
