export type Work = {
  title: string;
  place: string;
  duration: string;
  link: string;
};

export const works: Work[] = [
  {
    title: "Software Engineer Intern",
    place: "ABC Company",
    duration: "June 2021 - August 2021",
    link: "https://www.abccompany.com/careers",
  },
  {
    title: "Frontend Developer",
    place: "XYZ Tech Solutions",
    duration: "January 2020 - Present",
    link: "https://www.xyztechsolutions.com",
  },
  {
    title: "Web Developer",
    place: "TechStart Innovations",
    duration: "March 2018 - December 2019",
    link: "https://www.techstartinnovations.com",
  },
];

export type Projects = {
  title: string;
  image: string;
  description: string;
  playStoreLink?: string;
  appStoreLink?: string;
  webLink?: string;
  photos: string[];
};
