import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./storage";
import { getImageUrls } from "./getImageUrls";

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
