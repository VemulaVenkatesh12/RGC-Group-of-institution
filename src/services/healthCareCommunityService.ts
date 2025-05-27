import { Get } from "../utils/apiServices";

const HealthCareCommunityServiceApi = "/healthcare-community-service";

export interface HealthCareCommunityServiceResponse {
  data: HealthCareCommunityServiceResponseData;
}

export interface HealthCareCommunityServiceResponseData {
  id: number;
  documentId: string;
  banner_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_home_text: string;
  banner_home_link: string;
  banner_campus_life_text: string;
  banner_campus_life_link: string;
  banner_healthcare_text: string;
  banner_healthcare_link: string;
  Community_Services: CommunityServices;
  banner_image: BannerImage;
}

export interface CommunityServices {
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



export const getHealthCareCommunityServiceData =
  async (): Promise<HealthCareCommunityServiceResponse> => {
    const url = `${HealthCareCommunityServiceApi}?populate[Community_Services][populate]=*&populate=banner_image`;
    const response = await Get<HealthCareCommunityServiceResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
