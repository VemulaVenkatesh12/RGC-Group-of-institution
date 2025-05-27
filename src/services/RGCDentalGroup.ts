import { Get } from "../utils/apiServices";

const RGCDentalGroupApi = "/rgc-dental-college-of-dental-science";

export interface RGCDentalGroupResponse {
  data: RGCDentalGroupResponseData;
}

export interface RGCDentalGroupResponseData {
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
  About_the_Institution: AboutTheInstitution;
  our_courses: OurCourses;
  banner_image: BannerImage;
}

export interface AboutTheInstitution {
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

export interface OurCourses {
  id: number;
  title: string;
  subtitle: string;
  courses: Course[];
}

export interface Course {
  id: number;
  UG_PG: string;
  course_name: string;
  course_details: string;
  course_duration: string;
  Apply_Now_text: string;
  apply_now_link: string;
  View_Details_text: string;
  View_Details_link: string;
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

export const getRGCDentalGroupData =
  async (): Promise<RGCDentalGroupResponse> => {
    const url = `${RGCDentalGroupApi}?populate[About_the_Institution][populate]=*&populate[our_courses][populate][courses][populate]=*&populate=banner_image`;
    const response = await Get<RGCDentalGroupResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
