import { Get } from "../utils/apiServices"

const ReachUsApi = "/rgc-reach-us"

export interface ReachUsResponse {
  data: ReachUsResponseData
}

export interface ReachUsResponseData {
  id: number
  documentId: string
  banner_title: string
  reach_us_title: string
  reach_us_description: string
  reach_us_map_url: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_home_text: string
  banner_home_link: string
  banner_Course_Details_text: string
  banner_Course_Details_link: string
  Full_Name: string
  Contact_No: string
  Email: string
  Queries: string
  Send_Application_text: string
  Send_Application_link: string
  banner_image: BannerImage
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

export const getReachUsResponseData = async (): Promise<ReachUsResponse> => {
  const url = `${ReachUsApi}?populate=banner_image`;
  const response = await Get<ReachUsResponse, undefined>(url, undefined);
  return response;
};