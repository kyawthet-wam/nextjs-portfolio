import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...imports: ClassValue[]) {
  return twMerge(clsx(imports));
}
