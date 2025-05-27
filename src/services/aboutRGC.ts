import { Get } from "../utils/apiServices";
const AboutRGCApi = "/rgc-about-us";

export interface AboutRGCResponse {
  data: AboutRGCResponseData;
}

export interface AboutRGCResponseData {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_link: string;
  banner_about_us_link: string;
  banner_home_text: string;
  banner_about_us_text: string;
  about: About[];
  Accreditations_Affiliations: AccreditationsAffiliations;
  image: Image3;
}

export interface About {
  __component: string;
  id: number;
  title: string;
  subtitle?: string;
  Description: string;
  image: Image;
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

export interface AccreditationsAffiliations {
  id: number;
  title: string;
  subtitle: string;
  Acc_Aff: AccAff[];
}

export interface AccAff {
  id: number;
  text: string;
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
  small: Format2;
  thumbnail: Format2;
}

export interface Format2 {
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

export interface Image3 {
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

export const getAboutRGCData = async (): Promise<AboutRGCResponse> => {
  const url = `${AboutRGCApi}?populate[about][populate]=*&populate[Accreditations_Affiliations][populate][Acc_Aff][populate]=*&populate=image`;
  const response = await Get<AboutRGCResponse, undefined>(url, undefined);
  return response;
};
