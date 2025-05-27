import { Get } from "../utils/apiServices";

const ExternalPublicationApi = "/publication";
export interface ExternalPublicationResponse {
  data: ExternalPublicationResponseData;
}

export interface ExternalPublicationResponseData {
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
  publications: Publication[];
  banner_image: BannerImage;
}

export interface Publication {
  id: number;
  name: string;
  pdf_file: PdfFile;
  pdf_image: PdfImage
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

export interface PdfImage {
  id: number
  documentId: string
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: string
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

export const getExternalPublicationData =
  async (): Promise<ExternalPublicationResponse> => {
    const url = `${ExternalPublicationApi}?populate[publications][populate]=*&populate=banner_image`;
    const response = await Get<ExternalPublicationResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
