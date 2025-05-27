import { Get } from "../utils/apiServices";

const ourManagementdata = "/our-management-about-us";

export interface OurManagementResponse {
  data: OurManagementResponseData;
}

export interface OurManagementResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_Campus_facilities_text: string;
  banner_Campus_facilities_link: string;
  banner_gallery_text: string;
  banner_gallery_link: string;
  Leadership_Management: LeadershipManagement;
  banner_image: BannerImage;
  block: Block[];
}

export interface LeadershipManagement {
  id: number;
  title: string;
  subtitle: string;
  Leadership_Management: LeadershipManagement2[];
}

export interface LeadershipManagement2 {
  id: number;
  name: string;
  title: string;
  image: Image;
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

export interface Block {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  chairman_name: string;
  date: string;
  Know_More_text: string;
  Know_More_link: string;
  image: Image;
}

export const getOurManagementData =
  async (): Promise<OurManagementResponse> => {
    const url = `${ourManagementdata}?populate[Leadership_Management][populate][Leadership_Management][populate]=*&populate=banner_image&populate[block][populate]=*`;
    const response = await Get<OurManagementResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
