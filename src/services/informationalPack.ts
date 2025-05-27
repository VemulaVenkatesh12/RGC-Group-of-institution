import { Get } from "../utils/apiServices";

const informationalPackApi = "/informational-pack";

export interface InformationalPackResponse {
  data: InformationalPackResponseData;
}

export interface InformationalPackResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_Course_Details_text: string;
  banner_Course_Details_link: string;
  informational_pack: InformationalPack;
  banner_image: BannerImage;
}

export interface InformationalPack {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  For_Indian_Students_title: string;
  For_Indian_Students_description: string;
  For_Indian_Students_contact_text: string;
  For_Indian_Students_ph_no1: string;
  For_Indian_Students_ph_no2: string;
  Foreign_Students_text: string;
  Foreign_Students_description: string;
  Foreign_Students_contact_text: string;
  Foreign_Students_ph_no: string;
  For_Parents_text: string;
  For_Parents_description: string;
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
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Large {
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

export interface Small {
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

export interface Medium {
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

export interface Thumbnail {
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

export const getInformationalPackData =
  async (): Promise<InformationalPackResponse> => {
    const url = `${informationalPackApi}?populate[informational_pack][populate]=*&populate=banner_image`;
    const response = await Get<InformationalPackResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
