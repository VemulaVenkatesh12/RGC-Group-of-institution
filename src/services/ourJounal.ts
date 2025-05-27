import { Get } from "../utils/apiServices";

const ourJournalApi = "/our-journal-dental-era";
export interface OurJournalResponse {
  data: OurJournalResponseData;
}

export interface OurJournalResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_Academics_Admission_text: string;
  banner_Academics_Admission_link: string;
  banner_image: BannerImage;
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

export const getOurJournal = async (): Promise<OurJournalResponse> => {
  const url = `${ourJournalApi}?populate=banner_image`;
  const response = await Get<OurJournalResponse, undefined>(url, undefined);
  return response;
};
