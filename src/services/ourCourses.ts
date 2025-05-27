import { Get } from "../utils/apiServices";

const ourCourses = "/course-listing-page";
export interface OurCourcesResponse {
  data: OurCourcesData;
}

export interface OurCourcesData {
  id: number;
  documentId: string;
  banner_title: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_link: string;
  banner_course_details_link: string;
  banner_home_text: string;
  banner_course_details_Text: string;
  courses: Courses;
  banner_image: BannerImage;
}

export interface Courses {
  id: number;
  course_type: CourseType[];
}

export interface CourseType {
  id: number;
  course_type_name: string;
  departments: Department[];
}

export interface Department {
  id: number;
  UG_PG: string;
  department_name: string;
  details: string;
  course_details: string;
  Apply_Now_text: string;
  apply_now_link: string;
  View_Details_text: string;
  View_Details_link: string;
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

export const getOurCourses = async (): Promise<OurCourcesResponse> => {
  const url = `${ourCourses}?populate[courses][populate][course_type][populate][departments][populate]=image&populate=banner_image`;
  const response = await Get<OurCourcesResponse, undefined>(url, undefined);
  return response;
};
