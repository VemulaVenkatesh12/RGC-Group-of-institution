import { Get } from "../utils/apiServices";

const OurPoliciesApi = "/our-policie";

export interface OurPoliciesResponse {
  data: OurPoliciesResponseData;
}

export interface OurPoliciesResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_about_us_text: string;
  banner_about_us_link: string;
  Anti_Ragging_Policy: AntiRaggingPolicy;
  Anti_ragging_committee_members: AntiRaggingCommitteeMembers;
  Immediate_Contact_Nos: ImmediateContactNos;
  banner_image: BannerImage;
}

export interface AntiRaggingPolicy {
  id: number;
  title: string;
  Description: string;
  pdf_text: string;
  pdf_link: string;
  Download: string;
  Download_link: string;
  pdf_image: PdfImage;
  pdf: Pdf;
}

export interface PdfImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: string;
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

export interface Pdf {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: string;
  height: string;
  formats: string;
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

export interface AntiRaggingCommitteeMembers {
  id: number;
  title: string;
  details: Detail[];
}

export interface Detail {
  id: number;
  name: string;
  designation: string;
  contact_number: string;
}

export interface ImmediateContactNos {
  id: number;
  title: string;
  contact_numbers: ContactNumber[];
}

export interface ContactNumber {
  id: number;
  title: string;
  contact_catagory: ContactCatagory[];
}

export interface ContactCatagory {
  id: number;
  name: string;
  contact_number?: string;
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

export const getOurPoliciesResponseData =
  async (): Promise<OurPoliciesResponse> => {
    const url = `${OurPoliciesApi}?populate%5bAnti_Ragging_Policy%5d%5bpopulate%5d=*&populate%5bAnti_ragging_committee_members%5d%5bpopulate%5d=*&populate%5bImmediate_Contact_Nos%5d%5bpopulate%5d%5bcontact_numbers%5d%5bpopulate%5d%5bcontact_catagory%5d=*&populate=banner_image`;
    const response = await Get<OurPoliciesResponse, undefined>(url, undefined);
    return response;
  };
