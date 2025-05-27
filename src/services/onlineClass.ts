import { Get } from "../utils/apiServices";

const onlineClassApi = "/online-class";

export interface OnlineClassResponse {
  data: OnlineClassResponseData;
}

export interface OnlineClassResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  youtube_link: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_link: string;
  banner_home_text: string;
  banner_Academics_Admission_text: string;
  banner_Academics_Admission_link: string;
  banner_image: BannerImage;
}

export interface BannerImage {
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
  large: Format;
  small: Format;
  medium: Format;
  thumbnail: Format;
}

export interface Format {
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

export const getOnlineClassData = async (): Promise<OnlineClassResponse> => {
  const url = `${onlineClassApi}?populate=banner_image`;
  const response = await Get<OnlineClassResponse, undefined>(url, undefined);
  return response;
};
