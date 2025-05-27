import { Get } from "../utils/apiServices";

const CampusLifeApi = "/rgc-campus-life";

export interface CampusLifeResponse {
  data: CampusLifeResponseData;
}

export interface CampusLifeResponseData {
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
  block: Block[];
  tour_gallery: TourGallery[];
  Sports_Recreation: SportsRecreation;
  campus_facilities: CampusFacilities;
  banner_image: BannerImage;
}

export interface Block {
  __component: string;
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  Reach_US_text?: string;
  Reach_US_link?: string;
  image: Image;
  Reach_Us_text?: string;
  Reach_Us_link?: string;
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

export interface TourGallery {
  id: number;
  title: string;
  subtitle: string;
  link: string;
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

export interface SportsRecreation {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  image_title: string;
  image_description: string;
  sports_meet: SportsMeet[];
}

export interface SportsMeet {
  id: number;
  name: string;
  Description: string;
  image: Image3;
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

export interface CampusFacilities {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  facilities: Facility[];
}

export interface Facility {
  id: number;
  facilities_name: string;
  image: Image4;
}

export interface Image4 {
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

export const getCampusLifeData = async (): Promise<CampusLifeResponse> => {
  const url = `${CampusLifeApi}?populate[block][populate]=*&populate[tour_gallery][populate]=*&populate[Sports_Recreation][populate][sports_meet][populate]=*&populate[campus_facilities][populate][facilities][populate]=*&populate=banner_image`;
  const response = await Get<CampusLifeResponse, undefined>(url, undefined);
  return response;
};
