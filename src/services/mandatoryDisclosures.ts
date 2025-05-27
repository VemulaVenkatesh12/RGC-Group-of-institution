import { Get } from "../utils/apiServices";

const mandatoryDisclosuresApi = "/mandatory-disclosure";

export interface MandatoryDisclosuresResponse {
  data: MandatoryDisclosuresResponseData;
}

export interface MandatoryDisclosuresResponseData {
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
  pdfs: Pdf[];
  images: Images;
}

export interface Pdf {
  id: number;
  text: string;
  pdf_file: PdfFile;
}

export interface PdfFile {
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

export interface Images {
  id: number;
  banner_image: BannerImage;
  pdf_image: PdfImage;
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

export const getmandatoryDisclosuresData =
  async (): Promise<MandatoryDisclosuresResponse> => {
    const url = `${mandatoryDisclosuresApi}?populate[pdfs][populate]=*&populate[images][populate]=*`;
    const response = await Get<MandatoryDisclosuresResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
