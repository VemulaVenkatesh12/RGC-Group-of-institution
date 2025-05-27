import { Get } from "../utils/apiServices";

const galleryApi = "/gallery";

export interface GalleryResponse {
  data: GalleryResponseData
}

export interface GalleryResponseData {
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
  gallery: Gallery
  banner_image: BannerImage
}

export interface Gallery {
  id: number
  title: string
  subtitle: string
  Description: string
  gallery_types: GalleryType[]
}

export interface GalleryType {
  id: number
  name: string
  images: Image[]
}

export interface Image {
  id: number
  image: Image2
}

export interface Image2 {
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
  large : Format
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

export const getGalleryData = async (): Promise<GalleryResponse> => {
  const url = `${galleryApi}?populate%5bgallery%5d%5bpopulate%5d%5bgallery_types%5d%5bpopulate%5d%5bimages%5d%5bpopulate%5d=*&populate=banner_image`;
  const response = await Get<GalleryResponse, undefined>(url, undefined);
  return response;
};