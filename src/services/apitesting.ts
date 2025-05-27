import { Get } from "../utils/apiServices";

const enquiryForm = "/about-uses";
export interface Root {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  documentId: string
  about_the_institution: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_images: BannerImage[]
}

export interface BannerImage {
  id: number
  img_title: string
  about_img_heading: string
  about_img_description: string
  img: Img
}

export interface Img {
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
  large: Large
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

export interface Large {
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

export interface Small {
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

export interface Medium {
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

export interface Thumbnail {
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

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}


export const gettestingApi = async (): Promise<Root> => {
  const url = `${enquiryForm}?populate[banner_images][populate]=img`;
  const response = await Get<Root, undefined>(url, undefined);
  return response;
};
