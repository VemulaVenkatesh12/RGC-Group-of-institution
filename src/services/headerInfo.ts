import { Get } from "../utils/apiServices";

const headerInfoData = "/hedder";

export interface HeaderInfoResponse {
  data: HeaderInforData;
}

export interface HeaderInforData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hedder_logo: HeaderLogo;
  navigation_menu: NavigationMenuItem[];
}

interface NavigationMenuItem {
  id: number;
  menu_name: string;
  text_1: string;
  text1_link: string;
  text2: string;
  text2_link: string;
  text3: string;
  text3_link: string;
  text4: string;
  text_4_link: string;
  text5: string;
  text5_link: string;
  text_6?: string;
  text6_link?: string;
  image: Image;
}

interface HeaderLogo {
  id: number;
  Engineering: string;
  Engineering_link: string;
  Dental_text: string;
  Dental_link: string;
  Nursing_text: string;
  Nursing_link: string;
  Education_text: string;
  Education_link: string;
  Commerce_text: string;
  Commerce_link: string;
  fb_link: string;
  twitter_link: string;
  insta_link: string;
  youtube_link: string;
  linkedIn_link: string;
  Our_Courses_text: string;
  Our_Courses_link: string;
  Alumni_Services_text: string;
  Alumni_Services_link: string;
  News_Events_text: string;
  News_Events_link: string;
  Staff_login_text: string;
  Staff_login_link: string;
  Reach_Us_text: string;
  Reach_Us_link: string;
  NIRF_text: string;
  NIRF_link: string;
  NACC_text: string;
  NACC_Link: string;
  number: string;
  email_id: string;
  call_text: string;
  logo: Image;
  fb_image: Image;
  twitter_image: Image;
  insta_image: Image;
  youtube_image: Image;
  linkedin_image: Image;
  call_symbol: Image;
  email_image: Image;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: ImageFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface ImageFormats {
  large?: Format;
  small?: Format;
  medium?: Format;
  thumbnail?: Format;
}

export const getHeaderInfoData = async (): Promise<HeaderInfoResponse> => {
  const url = `${headerInfoData}?populate[hedder_logo][populate]=*&populate[navigation_menu][populate]=*`;
  const response = await Get<HeaderInfoResponse, undefined>(url, undefined);
  return response;
};
