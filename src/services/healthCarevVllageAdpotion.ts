import { Get } from "../utils/apiServices";

const villageAdoptionApi = "/healthcare-village-adoption";

export interface VillageAdoptionsResponse {
  data: VillageAdoptionsResponseData;
}

export interface VillageAdoptionsResponseData {
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
  Village_Adoptions: VillageAdoptions;
  banner_image: BannerImage;
}

export interface VillageAdoptions {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
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

export const getVillageAdopotionData =
  async (): Promise<VillageAdoptionsResponse> => {
    const url = `${villageAdoptionApi}?populate%5bVillage_Adoptions%5d%5bpopulate%5d=*&populate=banner_image`;
    const response = await Get<VillageAdoptionsResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
