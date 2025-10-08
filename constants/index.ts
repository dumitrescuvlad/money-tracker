import Constants from "expo-constants";

const extras = (Constants.expoConfig?.extra as any) ?? {};
export const CLOUDINARY_CLOUD_NAME: string = extras.cloudinary?.cloudName ?? "";
export const CLOUDINARY_UPLOAD_PRESET: string =
  extras.cloudinary?.uploadPreset ?? "";

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
  console.warn("[cloudinary] Missing EXPO_PUBLIC_CLOUDINARY_* envs.");
}
