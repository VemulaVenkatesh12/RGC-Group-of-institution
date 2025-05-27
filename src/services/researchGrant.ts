import { Get } from "../utils/apiServices";

const researchGrant = "/research-grant";

export interface ResearchRes {
  data: ResearchResData;
}

export interface ResearchResData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_link: string;
  banner_academics_Admission_link: string;
  banner_home_text: string;
  banner_academics_Admission_text: string;
  text: string;
  point_1: string;
  point_2: string;
  text_1: string;
  point_3: string;
  point_4: string;
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

export const getResearchData = async (): Promise<ResearchRes> => {
  const url = `${researchGrant}?populate=banner_image`;
  const response = await Get<ResearchRes, undefined>(url, undefined);
  return response;
};
