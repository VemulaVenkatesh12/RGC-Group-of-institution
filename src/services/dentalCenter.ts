import { Get } from "../utils/apiServices";

const dentalHospitalapi = "/healthcare-dental-hospital";

export interface DentalHospitalResponse {
  data: DentalHospitalResponseData
}

export interface DentalHospitalResponseData {
  id: number
  documentId: string
  banner_title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_home_text: string
  banner_home_link: string
  banner_Campus_facilities_text: string
  banner_Campus_facilities_link: string
  banner_dental_hospital_text: string
  banner_dental_hospital_link: string
  Dental_Hospital: DentalHospital
  banner_image: BannerImage
}

export interface DentalHospital {
  id: number
  title: string
  subtitle: string
  Description: string
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

export const getdentalHospitalData = async (): Promise<DentalHospitalResponse> => {
  const url = `${dentalHospitalapi}?populate[Dental_Hospital][populate]=*&populate=banner_image`;
  const response = await Get<DentalHospitalResponse, undefined>(url, undefined);
  return response;
};

