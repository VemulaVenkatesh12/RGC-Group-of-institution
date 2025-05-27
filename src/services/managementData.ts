import { Get } from "../utils/apiServices";

const managementdata = "/about-us-1-rgc";

export interface ManagementDataResponse {
  data: ManagementData;
}

export interface ManagementData {
  id: number;
  documentId: string;
  banner_title: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_about_us_text: string;
  banner_about_us_link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_image: ImageData;
  Director: Director;
  Education_Experience: EducationExperience[];
}

interface ImageData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageFormats {
  large?: Format;
  medium?: Format;
  small?: Format;
  thumbnail?: Format;
}

export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Director {
  id: number;
  title: string;
  name: string;
  date: string;
  Description: string;
  image: ImageData;
}

export interface EducationExperience {
  id: number;
  title: string;
  details: EducationExperienceDetail[];
  logo: ImageData;
}

export interface EducationExperienceDetail {
  id: number;
  name: string;
}

export const getManagementData = async (): Promise<ManagementDataResponse> => {
  const url = `${managementdata}?populate[Director][populate]=*&populate[Education_Experience][populate]=*&populate=banner_image`;
  const response = await Get<ManagementDataResponse, undefined>(url, undefined);
  return response;
};
