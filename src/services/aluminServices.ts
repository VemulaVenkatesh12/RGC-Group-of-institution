import { Get } from "../utils/apiServices";

const aluminService = "/alumni-service"

export interface AluminServiceResponse {
  data: AluminServiceData
}

export interface AluminServiceData {
  id: number
  documentId: string
  banner_title: string
  title: string
  Description: string
  fb_link: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_home_text: string
  banner_home_link: string
  banner_Academics_Admission_text: string
  banner_Academics_Admission_link: string
  Register_text: string
  Register_link: string
  Login_text: string
  Login_link: string
  Visit_us_on_Facebook_text: string
  Rajiv_Gandhi_Dental_College_Alumni_Association: RajivGandhiDentalCollegeAlumniAssociation
  banner_image: BannerImage
}

export interface RajivGandhiDentalCollegeAlumniAssociation {
  id: number
  title: string
  subtitle: string
  Alumni_Association: AlumniAssociation[]
}

export interface AlumniAssociation {
  id: number
  SL_NO: string
  alumni: string
  DESIGNATION: string
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

export interface Formats {
  large: Format
  small: Format
  medium: Format
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


export const getAluminiService = async (): Promise<AluminServiceResponse> => {
  const url = `${aluminService}?populate%5bRajiv_Gandhi_Dental_College_Alumni_Association%5d%5bpopulate%5d=*&populate=banner_image`;
  const response = await Get<AluminServiceResponse, undefined>(url, undefined);
  return response;
};