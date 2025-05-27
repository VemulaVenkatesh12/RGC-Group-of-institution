import { Get } from "../utils/apiServices";

const footerPage = "/footer";

export interface FopterResponse {
  data: FooterData;
}

export interface FooterData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  footer: Footer;
}

export interface Footer {
  id: number;
  Engineering_text: string;
  Engineering_link: string;
  Dental_text: string;
  Dental_link: string;
  Nursing_text: string;
  Nursing_link: string;
  Education_text: string;
  Education_link: string;
  Commerce_text: string;
  Commerce_link: string;
  Quick_Links_text: string;
  Mandatory_Disclosures_text: string;
  Mandatory_Disclosures_link: string;
  Notice_Board_text: string;
  Notice_Board_link: string;
  Contact_Us_text: string;
  content_us_link: string;
  Links: string;
  Our_Courses_text: string;
  Our_Courses_link: string;
  Alumni_Services_text: string;
  Alumni_Services_link: string;
  News_Events_text: string;
  News_Events_link: string;
  Our_Newsletter: string;
  Our_Newsletter_text: string;
  email_symbol_url: string;
  fb_link: string;
  twitter_link: string;
  insta_link: string;
  youtube_link: string;
  logo: Logo;
  fb_image: FbImage;
  twitter_image: TwitterImage;
  insta_image: InstaImage;
  youtube_image: YoutubeImage;
  mail_symbol: MailSymbol;
  Copyrights_copy: string;
}

export interface Logo {
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

export interface FbImage {
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

export interface TwitterImage {
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

export interface InstaImage {
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

export interface YoutubeImage {
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

export interface MailSymbol {
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

export const getFooterData = async (): Promise<FopterResponse> => {
  const url = `${footerPage}?populate[footer][populate]=*`;
  const response = await Get<FopterResponse, undefined>(url, undefined);
  return response;
};
