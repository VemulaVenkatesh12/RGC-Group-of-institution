import { Get } from "../utils/apiServices";

const VisvesvarayaInstituteApi = "/sir-m-visvesvaraya-institute";

export interface VisvesvarayaInstituteResponse {
  data: VisvesvarayaInstituteResponseData;
}

export interface VisvesvarayaInstituteResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_link: string;
  banner_home: string;
  banner_our_Institutions_text: string;
  banner_Our_Institutions_link: string;
  banner_dental_college_text: string;
  banner_dental_college_link: string;
  block: Block[];
  our_courses: OurCourses;
  banner_image: BannerImage;
}

export interface Block {
  __component: string;
  id: number;
  title: string;
  Description: string;
  visit_text?: string;
  visit_link?: string;
  image: Image;
  subtitle?: string;
  logo_description?: string;
  Apply_Now_text?: string;
  apply_now_link?: string;
  logo?: Logo;
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

export interface Logo {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats2;
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

export interface Formats2 {
  thumbnail: Thumbnail2;
}

export interface Thumbnail2 {
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
  ourse_duration: string;
  Apply_Now_text: string;
  apply_now_link: string;
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

export const getVisvesvarayaInstituteData =
  async (): Promise<VisvesvarayaInstituteResponse> => {
    const url = `${VisvesvarayaInstituteApi}?populate[block][populate]=*&populate[our_courses][populate][course_type][populate][departments][populate]=*&populate=banner_image`;
    const response = await Get<VisvesvarayaInstituteResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
