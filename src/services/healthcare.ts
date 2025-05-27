import { Get } from "../utils/apiServices";

const HealthcareApi = "/rgc-healthcare";
export interface HealthcareResponse {
  data: HealthcareResponseData;
}

export interface HealthcareResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_campus_life_text: string;
  banner_campus_life_link: string;
  banner_healthcare_text: string;
  banner_healthcare_link: string;
  block: Block[];
  about_the_healthcare: AboutTheHealthcare;
  banner_image: BannerImage;
}

export interface Block {
  __component: string;
  id: number;
  title: string;
  Description: string;
  View_NOW_text?: string;
  View_NOW_link?: string;
  subtitle?: string;
  logo_title?: string;
  logo_subtitle?: string;
  Apply_Now_text?: string;
  apply_now_link?: string;
  image?: Image;
  logo?: Logo;
}

export interface Image {
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

export interface Logo {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats2;
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

export interface Formats2 {
  thumbnail: Thumbnail2;
}

export interface Thumbnail2 {
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

export interface AboutTheHealthcare {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  courses: Course[];
}

export interface Course {
  id: number;
  name: string;
  Know_More_text: string;
  Know_More_link: string;
  image: Image2;
}

export interface Image2 {
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

export const getHealthcareData = async (): Promise<HealthcareResponse> => {
  const url = `${HealthcareApi}?populate[block][populate]=*&populate[about_the_healthcare][populate][courses][populate]=*&populate=banner_image`;
  const response = await Get<HealthcareResponse, undefined>(url, undefined);
  return response;
};
