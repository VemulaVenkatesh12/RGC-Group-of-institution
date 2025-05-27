import { Get } from "../utils/apiServices";

const researchGrant = "/visit-our-college";

export interface VisitResp {
  data: VisitRespData
}

export interface VisitRespData {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  visit_our_college: VisitOurCollege
}

export interface VisitOurCollege {
  id: number
  title: string
  Description: string
  Know_More_text: string
  Know_More_link: string
}

export const getVisitIframe = async (): Promise<VisitResp> => {
  const url = `${researchGrant}?populate=*`;
  const response = await Get<VisitResp, undefined>(url, undefined);
  return response;
};