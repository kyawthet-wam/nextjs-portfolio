import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="m-10">
        <div className="px-1 w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="profile"
            className="h-[300px] w-[300px] rounded-full"
          />
        </div>
        <div className="relative text-2xl text-black font-bold pt-10">
          About Me
        </div>
        <div className="relative text-sm text-black font-light pt-2">
          I am Kyaw Thet Wam, Mobile Developer from Mandalay, Myanmar.
        </div>
        <div className="max-w-[80vh] text-justify text-slate-600 text-sm whitespace-normal py-8">
          Experienced mobile developer with a proven track record of creating
          polished cross-platform mobile applications using Flutter. With three
          plus years of hands-on experience, I am able to deliver high-quality,
          performant apps for both iOS and Android. My focus on clean code,
          efficient UI/UX design, and collaboration with cross-functional teams
          has consistently contributed to successful project outcomes. My
          dedication to staying updated with industry trends ensures I utilize
          the latest tools and techniques. With a passion for crafting
          exceptional user experiences, I am committed to contributing to your
          mobile app projects' success.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="relative text-md text-black font-bold">
                Education
              </div>
              <div className="relative text-slate-600 text-sm">
                B.E. (Hons) in Computer Science<br></br> Myanmar Institute of
                Information Technology
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative text-md text-black font-bold">
                Experience
              </div>
              <div className="relative text-slate-600 text-sm">
                I have 3+ years of experience in Software Development
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col md:grid-flow-row">
            <div className="col-span-2 md:col-span-2 lg:col-span-4 gap-2 space-y-2">
              <div className="relative text-md text-black font-bold">
                Skills
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Flutter" />
                <SkillBadge skill="Dart" />
                <SkillBadge skill="Java" />
                <SkillBadge skill="Python" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="NextJs" />
                <SkillBadge skill="Firebase" />
                <SkillBadge skill="Html" />
                <SkillBadge skill="CSS" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="SQlite" />
                <SkillBadge skill="Git" />
                <SkillBadge skill="Problem Solving" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Communication" />
                <SkillBadge skill="Teamwork" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return <div className="grid grid-rows-5 grid-cols-4 gap-1 "></div>;
}

export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex justify-center rounded-lg bg-sky-600 px-4 py-1 text-xs text-justify  font-medium text-white ring-1 ring-inset ring-blue-700/10">
      {skill}
    </span>
  );
}
