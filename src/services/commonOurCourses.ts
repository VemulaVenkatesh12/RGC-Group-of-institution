import { Get } from "../utils/apiServices"

const ourCoursesApi = "/our-course"

export interface OurCoursesLandingPageResponse {
  data: OurCoursesLandingPageResponseData
}

export interface OurCoursesLandingPageResponseData {
  id: number
  documentId: string
  all_courses_text: string
  Engineering_text: string
  dental_text: string
  nursing_text: string
  Education_text: string
  commerce_text: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  Undergraduate_text: string
  postgraduate_text: string
  departments: Department[]
}

export interface Department {
  id: number
  UG_PG: string
  department_name: string
  course_details?: string
  Apply_Now_text: string
  apply_now_link: string
  View_Details_text: string
  View_Details_link?: string
  department_type?: string
  course_duration: string
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

export const getOurCoursesLandingPageData = async (): Promise<OurCoursesLandingPageResponse> => {
  const url = `${ourCoursesApi}?populate[departments][populate]=*`;
  const response = await Get<OurCoursesLandingPageResponse, undefined>(url, undefined);
  return response;
};