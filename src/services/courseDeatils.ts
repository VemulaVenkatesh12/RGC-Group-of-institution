import { Get } from "../utils/apiServices"

const CourseDeatilsApi = "/rgc-course-detail-page";

export interface CourseDeatilsResponse {
  data: CourseDeatilsResponseData
}

export interface CourseDeatilsResponseData {
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
  course: Course[]
  banner_image: BannerImage
}

export interface Course {
  __component: string
  id: number
  title?: string
  Description?: string
  Enquiry_Form_text?: string
  Enquiry_Form_link?: string
  image?: Image
  modules_details?: ModulesDetail[]
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



export interface ModulesDetail {
  id: number
  title: string
  Description: string
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

export const getCourseDeatilsData = async (): Promise<CourseDeatilsResponse> => {
  const url = `${CourseDeatilsApi}?populate[course][populate]=*&populate=banner_image`;
  const response = await Get<CourseDeatilsResponse, undefined>(url, undefined);
  return response;
};