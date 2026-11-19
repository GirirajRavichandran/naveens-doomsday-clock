const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mcu-doomsday-clock.vercel.app";

export function publicAsset(path: string) {
  return `${basePath}/${path.replace(/^\/+/, "")}`;
}
