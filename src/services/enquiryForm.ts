import { Get } from "../utils/apiServices";

const enquiryForm = "/common-enquiry-form";

export interface EnquiryFormResp {
  data: EnquiryFormRespData
}

export interface EnquiryFormRespData {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  enquiry_form: EnquiryFormForm
}

export interface EnquiryFormForm {
  id: number
  title: string
  subtitle: string
  first_name: string
  last_name: string
  email_id: string
  phone: string
  enter_query: string
  send_text: string
  send_link: string
  image_details: ImageDetail[]
}

interface ImageDetail {
  id: number;
  title: string;
  subtitle: string;
  image: Image;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
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


interface ImageFormats {
   large: ImageFormat;
   small: ImageFormat;
   medium: ImageFormat;
  thumbnail: ImageFormat;
}

interface ImageFormat {
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



export const getEnquiryForm = async (): Promise<EnquiryFormResp> => {
  const url = `${enquiryForm}?populate[enquiry_form][populate][image_details][populate]=*`;
  const response = await Get<EnquiryFormResp, undefined>(url, undefined);
  return response;
};
