import { Get } from "../utils/apiServices"

const ScholorshipApi = "/scholarship"

export interface ScholorshipResponse {
  data: ScholorshipResponseData
}

export interface ScholorshipResponseData {
  id: number
  documentId: string
  banner_title: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_home_text: string
  banner_home_link: string
  banner_Academics_Admission_text: string
  banner_Academics_Admission_link: string
  content_link1: string
  content_link2: string
  content_link3: string
  images: Images
}

export interface Images {
  id: number
  banner_image: BannerImage
  content_image: ContentImage[]
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



export interface ContentImage {
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

export const getScholorshipResponseData = async (): Promise<ScholorshipResponse> => {
  const url = `${ScholorshipApi}?populate[images][populate]=*`;
  const response = await Get<ScholorshipResponse, undefined>(url, undefined);
  return response;
};