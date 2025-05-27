import { Get } from "../utils/apiServices";

const enquiryForm = "/national-dental-register";

export interface EnquFormResp {
  data: EnquFormRespData;
}

export interface EnquFormRespData {
  id: number;
  documentId: string;
  banner_title: string;
  banner_image_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_link: string;
  banner_Academics_Admission_link: string;
  banner_home_text: string;
  banner_Academics_Admission_text: string;
  banner_image: BannerImage;
  enquiry_form: EnquiryFormDaaata;
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

export interface EnquiryFormDaaata {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  first_name: string;
  address: string;
  dob: string;
  email: string;
  ph_no: string;
  select_courses: string;
  send_text: string;
  send_link: string;
  Your_query: string;
}

export const getEnquForm = async (): Promise<EnquFormResp> => {
  const url = `${enquiryForm}?populate=*`;
  const response = await Get<EnquFormResp, undefined>(url, undefined);
  return response;
};
