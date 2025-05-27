import { Get } from "../utils/apiServices"

const medicalCollageApi = "/healthcare-medical-college"

export interface MedicalCollageResponse {
  data: MedicalCollageResponseData
}

export interface MedicalCollageResponseData {
  id: number
  documentId: string
  banner_title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_home_text: string
  banner_home_link: string
  banner_healthcare_text: string
  banner_healthcare_link: string
  block: Block[]
  banner_image: BannerImage
  facilities_avaliable: FacilitiesAvaliable[]
}

export interface Block {
  __component: string
  id: number
  title: string
  subtitle?: string
  Description?: string
  image: Image
  departments?: Department[]
  week_days?: string
  week_days_timings?: string
  week_ends?: string
  week_end_timings?: string
  title1?: string
  contact_numbers?: string
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



export interface Department {
  id: number
  name: string
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



export interface FacilitiesAvaliable {
  id: number
  title: string
  Facilities: Facility[]
}

export interface Facility {
  id: number
  name: string
  image: Image2
}

export interface Image2 {
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

export const getMedicalCollage = async (): Promise<MedicalCollageResponse> => {
  const url = `${medicalCollageApi}?populate%5bblock%5d%5bpopulate%5d=*&populate=banner_image&populate%5bfacilities_avaliable%5d%5bpopulate%5d%5bFacilities%5d%5bpopulate%5d=*`;
  const response = await Get<MedicalCollageResponse, undefined>(url, undefined);
  return response;
};