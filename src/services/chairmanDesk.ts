import { Get } from "../utils/apiServices";

const ChairmanDeskApi = "/rgc-chairman-innerpage-detail";

export interface ChairmanDeskAResponse {
  data: ChairmanDeskAResponseData;
}

export interface ChairmanDeskAResponseData {
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
  Our_Founder_Chairman: OurFounderChairman;
  Books_Written: BooksWritten[];
  banner_image: BannerImage;
}

export interface OurFounderChairman {
  id: number;
  title: string;
  Description: string;
  chairman_name: string;
  data: string;
  image: Image;
}

export interface BooksWritten {
  id: number;
  title: string;
  logo: Logo;
  book_names: BookName[];
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

export interface Logo {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats2;
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
export interface Thumbnail2 {
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

export interface BookName {
  id: number;
  name: string;
}

export interface Formats2 {
  thumbnail: Thumbnail2;
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

export const getChairmanDeskData = async (): Promise<ChairmanDeskAResponse> => {
  const url = `${ChairmanDeskApi}?populate[Our_Founder_Chairman][populate]=*&populate[Books_Written][populate]=*&populate=banner_image`;
  const response = await Get<ChairmanDeskAResponse, undefined>(url, undefined);
  return response;
};
