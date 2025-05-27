import { Get } from "../utils/apiServices";

const tourapi = "/take-a-tour";

export interface TourResPonse {
  data: TourResPonseData;
}

export interface TourResPonseData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  take_a_tour: TakeATour;
}

export interface TakeATour {
  id: number;
  title: string;
  Description: string;
  video: Video;
  video_symbol_image: VideoSymbolImage;
}

export interface Video {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: string;
  height: string;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface VideoSymbolImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export const getTourData = async (): Promise<TourResPonse> => {
  const url = `${tourapi}?populate%5btake_a_tour%5d%5bpopulate%5d=*`;
  const response = await Get<TourResPonse, undefined>(url, undefined);
  return response;
};
