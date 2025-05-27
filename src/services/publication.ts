import { Get } from "../utils/apiServices"

const publicationApi = "/rgc-publication"

export interface PublicationResponse {
  data: PublicationResponseData
}

export interface PublicationResponseData {
  id: number
  documentId: string
  banner_title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_home_text: string
  banner_home_link: string
  banner_Academics_Admission_link: string
  banner_Academics_Admission_text: string
  publication_details: PublicationDetail[]
  banner_image: BannerImage
}

export interface PublicationDetail {
  id: number
  name: string
  View_Details_text: string
  view_details_link: string
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

export const getPublicationData = async (): Promise<PublicationResponse> => {
  const url = `${publicationApi}?populate%5bpublication_details%5d%5bpopulate%5d=*&populate=banner_image`;
  const response = await Get<PublicationResponse, undefined>(url, undefined);
  return response;
};