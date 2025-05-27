import { Get } from "../utils/apiServices";

const RGCinsitutionsRApi = "/ragive-gandhi-institute";

export interface RGCinsitutionsResponse {
  data: RGCinsitutionsResponseData;
}

export interface RGCinsitutionsResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_link: string;
  banner_home_text: string;
  banner_our_Institutions_text: string;
  banner_Our_Institutions_link: string;
  banner_dental_college_text: string;
  banner_dental_college_link: string;
  About_the_RGIT: AboutTheRgit;
  our_courses: OurCourses;
  banner_image: BannerImage;
}

export interface AboutTheRgit {
  id: number;
  title: string;
  Description: string;
  visit_text: string;
  visit_link: string;
  image: Image;
}

export interface OurCourses {
  id: number;
  title: string;
  subtitle: string;
  course_type: CourseType[];
}

export interface CourseType {
  id: number;
  title: string;
  departments: Department[];
}

export interface Department {
  id: number;
  UG_PG: string;
  course_name: string;
  Description: string;
  duration: string;
  Apply_Now_text: string;
  apply_now_link: string;
  View_Details_text: string;
  view_details_link: string;
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

export const getRGCinsitutionsData =
  async (): Promise<RGCinsitutionsResponse> => {
    const url = `${RGCinsitutionsRApi}?populate[About_the_RGIT][populate]=*&populate[our_courses][populate][course_type][populate][departments][populate]=*&populate=banner_image`;
    const response = await Get<RGCinsitutionsResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
