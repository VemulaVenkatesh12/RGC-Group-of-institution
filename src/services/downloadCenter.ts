import { Get } from "../utils/apiServices";

const downloadCenter = "/download-centre";

export interface DownloadResponse {
  data: DownloadData;
}

export interface DownloadData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pdfs: Pdf[];
  Download_center: DownloadCenter;
}

export interface Pdf {
  id: number;
  text: string;
  pdf_file: PdfFile;
}

interface PdfFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface DownloadCenter {
  id: number;
  banner_title: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_Academics_Admission_text: string;
  banner_Academics_Admission_link: string;
  banner_image: BannerImage;
  pdf_image: PdfFile;
}

interface BannerImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: BannerImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface BannerImageFormats {
  large?: BannerImageFormat;
  medium?: BannerImageFormat;
  small?: BannerImageFormat;
  thumbnail?: BannerImageFormat;
}

interface BannerImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export const getDownloadCenter = async (): Promise<DownloadResponse> => {
  const url = `${downloadCenter}?populate[pdfs][populate]=*&populate[Download_center][populate]=*`;
  const response = await Get<DownloadResponse, undefined>(url, undefined);
  return response;
};
