import { Get } from "../utils/apiServices";

const contactBanner = "/campus-location-contact";

export interface contactBannerResp {
  data: contactBannerData;
}

export interface contactBannerData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  contact: Contact;
  campus_location: CampusLocation;
}

export interface Contact {
  id: number;
  title: string;
  mobile_number: string;
  email: string;
  ph_no_text: string;
  email_text: string;
}

export interface CampusLocation {
  id: number;
  title: string;
  Description: string;
}

export const getContactBanner = async (): Promise<contactBannerResp> => {
  const url = `${contactBanner}?populate=*`;
  const response = await Get<contactBannerResp, undefined>(url, undefined);
  return response;
};
