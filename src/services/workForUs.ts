import { Get } from "../utils/apiServices"
const WorkForUSApi = "/rgc-work-for-us"

export interface WorkForUSResponse {
  data: WorkForUSResponseData
}

export interface WorkForUSResponseData {
  id: number
  documentId: string
  banner_title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_home_text: string
  banner_home_link: string
  banner_Course_Details_text: string
  banner_Course_Details_link: string
  work_for_us: WorkForUs
  banner_image: BannerImage
}

export interface WorkForUs {
  id: number
  title: string
  subtitle: string
  Description: string
  image: Image
}

export interface Image {
  id: number
  documentId: string
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  large: Format
  small: Format
  medium: Format
  thumbnail: Format
}

export interface Format {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}



export interface BannerImage {
  id: number
  documentId: string
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export const getWorkForUSResponseData = async (): Promise<WorkForUSResponse> => {
  const url = `${WorkForUSApi}?populate[work_for_us][populate]=*&populate=banner_image`;
  const response = await Get<WorkForUSResponse, undefined>(url, undefined);
  return response;
};
