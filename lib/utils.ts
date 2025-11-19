import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = 'jt-resume'; // 必须与 next.config.ts 中的一致
  
  // 移除路径开头的 /，避免双重斜杠
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return isProd ? `/${repoName}/${cleanPath}` : `/${cleanPath}`;
}
