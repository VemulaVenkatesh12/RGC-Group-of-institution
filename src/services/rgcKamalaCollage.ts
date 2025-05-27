import { Get } from "../utils/apiServices";

const RGCKamalaCollageDataApi = "/kamala-college-of-nursing";

export interface RGCKamalaCollageResponse {
  data: RGCKamalaCollageResponseData;
}

export interface RGCKamalaCollageResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  our_Institutions_text: string;
  Our_Institutions_link: string;
  dental_college_text: string;
  dental_college_link: string;
  about_the_college: AboutTheCollege;
  our_courses: OurCourse[];
  banner_image: BannerImage;
}

export interface AboutTheCollege {
  id: number;
  title: string;
  Description: string;
  visit_text: string;
  visit_link: string;
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

export interface OurCourse {
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
  course_details: string;
  course_duration: string;
  apply_now_link: string;
  Apply_Now_text: string;
  view_details_link: string;
  View_Details_text: string;
  image: Image2;
}

export interface Image2 {
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

export const getRGCKamalaCollageData =
  async (): Promise<RGCKamalaCollageResponse> => {
    const url = `${RGCKamalaCollageDataApi}?populate[about_the_college][populate]=*&populate[our_courses][populate][course_type][populate][departments][populate]=*&populate=banner_image`;
    const response = await Get<RGCKamalaCollageResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
