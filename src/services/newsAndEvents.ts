import { Get } from "../utils/apiServices";

const NewsAndEventsApi = "/rgc-news-events-1";

export interface NewsAndEventsResponse {
  data: NewsAndEventsResponseData;
}

export interface NewsAndEventsResponseData {
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
  article_links: string;
  news: News;
  banner_image: BannerImage;
}

export interface News {
  id: number;
  title: string;
  all_posts: AllPost[];
}

export interface AllPost {
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

export const getNewsAndEventsData =
  async (): Promise<NewsAndEventsResponse> => {
    const url = `${NewsAndEventsApi}?populate[news][populate][all_posts][populate]=*&populate=banner_image`;
    const response = await Get<NewsAndEventsResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
