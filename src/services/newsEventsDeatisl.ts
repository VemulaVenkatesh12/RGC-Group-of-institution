import { Get } from "../utils/apiServices";

const NewsAndEventsDeatilsApi = "/rgc-news-events-2";
export interface NewsAndEventsDeatilsResponse {
  data: NewsAndEventsDeatilsResponseData;
}

export interface NewsAndEventsDeatilsResponseData {
  id: number;
  documentId: string;
  person_name: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title_1: string;
  what_to_read_next: WhatToReadNext;
  block: Block[];
}

export interface WhatToReadNext {
  id: number;
  title: string;
  modules: Module[];
}

export interface Module {
  id: number;
  name: string;
  title: string;
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

export interface Block {
  __component: string;
  id: number;
  title1?: string;
  title1_description?: string;
  title2?: string;
  title2_description1?: string;
  title2_description2?: string;
  title2_point1?: string;
  title2_point2?: string;
  title2_point3?: string;
  title2_description3?: string;
  title3?: string;
  title3_descrition?: string;
  person_image?: PersonImage;
  title1_image?: Title1Image;
}

export interface PersonImage {
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

export interface Title1Image {
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

export const getNewsAndEventsDeatilsData =
  async (): Promise<NewsAndEventsDeatilsResponse> => {
    const url = `${NewsAndEventsDeatilsApi}?populate[what_to_read_next][populate][modules][populate]=*&populate[block][populate]=*`;
    const response = await Get<NewsAndEventsDeatilsResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
