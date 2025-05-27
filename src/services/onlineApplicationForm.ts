import { Get } from "../utils/apiServices";

const OnlineApplicationApi = "/online-application";

export interface OnlineApplicationFormResponse {
  data: OnlineApplicationFormResponseData;
}

export interface OnlineApplicationFormResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_Course_Details_text: string;
  banner_Course_Details_link: string;
  banner_image: BannerImage;
  Online_Applications: OnlineApplications;
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

export interface OnlineApplications {
  id: number;
  title: string;
  Description: string;
  link: string;
  link_text: string;
}

export const getOnlineApplicationData =
  async (): Promise<OnlineApplicationFormResponse> => {
    const url = `${OnlineApplicationApi}?populate=*`;
    const response = await Get<OnlineApplicationFormResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
