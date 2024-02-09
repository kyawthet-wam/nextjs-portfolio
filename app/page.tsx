import { CheckCheck, Linkedin, Mail, Phone } from "lucide-react";
import { works } from "./definitions";

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
          <div className="flex flex-col md:col-span-2 gap-12">
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
              <div className="pt-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {works.map((work) => (
                  <Work />
                ))}
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
      <Footer />
    </div>
  );
}

export function Work() {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-sky-200 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <CheckCheck color="#0284c7" />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-xs text-slate-900">Order Placed</div>
          <time className="font-sans text-xs text-sky-600">
            Dec 2019 - Feb 2020
          </time>
        </div>
        <div className="text-xs text-slate-500">
          Pretium lectus quam id leo. Urna et pharetra aliquam
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-10">
          <a
            className="hover:text-blue-700 tooltip"
            data-tip="(+95) 09791867084"
            href="tel:+959791867084"
          >
            <Phone size={24} />
          </a>
          <a
            className="hover:text-blue-700 tooltip"
            data-tip="kyawthetwam@gmail.com"
            href="mailto:kyawthetwam@gmail.com"
          >
            <Mail size={24} />
          </a>
          <a
            className="hover:text-blue-700 tooltip"
            data-tip="Kyaw Thet Wam"
            href="https://www.linkedin.com/in/kyaw-thet-wam-71a0611a2"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Empowering Ideas, Building Futures | Kyaw Thet Wam © 2024 | Made with
          Passion and Precision
        </p>
      </aside>
    </footer>
  );
}

export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex justify-center rounded-lg bg-sky-600 px-4 py-1 text-xs text-justify  font-medium text-white ring-1 ring-inset ring-blue-700/10">
      {skill}
    </span>
  );
}
