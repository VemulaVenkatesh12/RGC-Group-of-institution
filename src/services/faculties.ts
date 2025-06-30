import { Get } from "../utils/apiServices";

const DepartmentFaculityApi =
  "http://10.140.243.43:1338/api/faculties/dwfbthte3ezmuqyqbeg2v1nf";

export interface DepartmentFaculityResponse {
  data: DepartmentFaculityResponseData;
}

export interface DepartmentFaculityResponseData {
  id: number;
  documentId: string;
  page_name_and_website_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  page_name: string;
  departments: Department[];
}

export interface Department {
  id: number;
  department_name: string;
  department_catagory: DepartmentCatagory[];
}

export interface DepartmentCatagory {
  id: number;
  department_catagory_name: string;
  Faculties_details: FacultiesDetail[];
}

export interface FacultiesDetail {
  id: number;
  name: string;
  designation: string;
  category_name: string;
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
  small: Format;
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

export const getDepartmentFaculityData = async (): Promise<DepartmentFaculityResponse> => {
  const url = `${DepartmentFaculityApi}?populate=departments.department_catagory.Faculties_details.image`;
  const response = await Get<DepartmentFaculityResponse, undefined>(url, undefined);
  return response;
};
