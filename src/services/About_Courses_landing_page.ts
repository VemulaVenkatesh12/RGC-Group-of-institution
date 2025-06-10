import { Get } from "../utils/apiServices";

const aboutCourseLandingPage = "/rgc-landing-page";

export interface CourseDataResponse {
  data: LandingData;
}

export interface LandingData {
  id: number;
  documentId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  block: Block[];
  About_Courses_landing_page: AboutCoursesLandingPage;
  about_us: AboutUs;
  testimonials: Testimonials;
  campus_life: CampusLifes;
  news_events: NewsEvents;
}

export interface Block {
  __component: string;
  id: number;
  online_application_form_text: string;
  online_application_form_link: string;
  view_our_program_text: string;
  view_our_program_link: string;
  image1: Image1;
  images: Image[];
  data: Daum[];
  application_form: ApplicationForm;
  online_application_form: OnlineApplicationForm;
  education_meets_quality: EducationMeetsQuality;
}

export interface Image1 {
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

export interface Daum {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
}

export interface ApplicationForm {
  id: number;
  title: string;
  Description: string;
}

export interface OnlineApplicationForm {
  id: number;
  title: string;
  Description: string;
}

export interface EducationMeetsQuality {
  id: number;
  title: string;
  Description: string;
}

export interface AboutCoursesLandingPage {
  id: number;
  title: string;
  subtitle: string;
}


export interface AboutUs {
  id: number
  title: string
  subtitle: string
  Description_text1: string
  Read_More_text: string
  Read_More_link: string
  image_details: ImageDetail[]
}

export interface ImageDetail {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  Know_More_text: string;
  Know_More_link: string;
  image: Image3;
}

export interface Image3 {
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

export interface Testimonials {
  id: number;
  title: string;
  subtitle: string;
  testimonials_details: TestimonialsDetail[];
}

export interface TestimonialsDetail {
  id: number;
  name: string;
  details: string;
  role: string;
  image: Image4;
}

export interface Image4 {
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

export interface CampusLifes {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  acadamics_text: string;
  Acadamics_link: string;
  campus_life_text: string;
  campus_life_link: string;
  details: Detail[];
}

export interface Detail {
  id: number;
  name: string;
  image: Image5;
}

export interface Image5 {
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

export interface NewsEvents {
  id: number;
  title: string;
  subtitle: string;
  image_title: string;
  image_subtitle: string;
  image_description: string;
  Read_More_text: string;
  Read_More_link: string;
  Read_All_News_Events: string;
  Read_All_News_Events_link: string;
  news_details: NewsDetail[];
}

export interface NewsDetail {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  Read_More_text: string;
  Read_More_link: string;
  image: Image6;
}

export interface Image6 {
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

export const getCourseLandingPage = async (): Promise<CourseDataResponse> => {
  const url = `${aboutCourseLandingPage}?populate[block][populate]=*&populate[About_Courses_landing_page][populate][Undergraduate][populate][courses][populate][departments][populate]=*&populate[about_us][populate][image_details][populate]=*&populate[testimonials][populate][testimonials_details][populate]=*&populate[campus_life][populate][details][populate]=*&populate[news_events][populate][news_details][populate]=*`;
  const response = await Get<CourseDataResponse, undefined>(url, undefined);
  return response;
};
