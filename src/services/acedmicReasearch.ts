import { Get } from "../utils/apiServices";

const AcedmicAndReasearchApi = "/rgc-academics-research";

export interface AcedmicAndReasearchResponse {
  data: AcedmicAndReasearchResponseData;
}

export interface AcedmicAndReasearchResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_Academics_Admissions_text: string;
  banner_Academics_Admissions_link: string;
  block: Block[];
  admission_process: AdmissionProcess;
  placements: Placements;
  banner_image: BannerImage;
}

export interface Block {
  __component: string;
  id: number;
  title: string;
  subtitle?: string;
  Description: string;
  Full_Name?: string;
  Contact_No?: string;
  Email?: string;
  Select_Course?: string;
  Queries?: string;
  Send_Application_text?: string;
  Send_Application_link?: string;
  one?: string;
  two?: string;
  three?: string;
  image?: Image;
  Know_More_text?: string;
  Know_More_link?: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string ;
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

export interface AdmissionProcess {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  admission_process_details: AdmissionProcessDetail[];
}

export interface AdmissionProcessDetail {
  id: number;
  title: string;
  Description: string;
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

export interface Placements {
  id: number;
  title: string;
  Description: string;
  VIEW_MORE_text: string;
  view_more_link: string;
  placed_students: PlacedStudent[];
}

export interface PlacedStudent {
  id: number;
  name: string;
  Description: string;
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

export const getAcedmicAndReasearchData =
  async (): Promise<AcedmicAndReasearchResponse> => {
    const url = `${AcedmicAndReasearchApi}?populate[block][populate]=*&populate[admission_process][populate][admission_process_details][populate]=*&populate[placements][populate][placed_students][populate]=*&populate=banner_image`;
    const response = await Get<AcedmicAndReasearchResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
