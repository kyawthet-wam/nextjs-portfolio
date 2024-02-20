import firebase from "@/config/firebase_config";
import { getStorage } from "firebase/storage";

export const storage = getStorage(
  firebase.getApp(),
  "gs://my-portfolio-9760a.appspot.com"
);
