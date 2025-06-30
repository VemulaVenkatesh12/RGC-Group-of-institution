import axios from 'axios';

const BASE_URL = 'http://10.140.243.43:1338';

const API_MAP: Record<string, string> = {
    cse: "/api/course-details-page-rgcits/jlvwggfq07dfde6w3xf3bpxd?populate=content&populate=images.image",
    "basic-science": "/api/course-details-page-rgcits/b2kw5106tut00xbao15lvar0?populate=content&populate=images.image",
    "biomed-nano": "/api/course-details-page-rgcits/b2kw5106tut00xbao15lvar0?populate=content&populate=images.image",
    civil: "/api/course-details-page-rgcits/o5jcom4sybvdeguyyw36quqp?populate=content&populate=images.image",
    "eee-energy": "/api/course-details-page-rgcits/r22pf2w5yy3ih4bj7k96a5ec?populate=content&populate=images.image",
    ece: "/api/course-details-page-rgcits/cjei8wl1j1scg307ikkgfamh?populate=content&populate=images.image",
    mba: "/api/course-details-page-rgcits/hx89blxwuua6vvto7gklqoh8?populate=content&populate=images.image",
    "mech-material": "/api/course-details-page-rgcits/tw2amr0ba76nelmo7oztp4pt?populate=content&populate=images.image",
};

export interface DepartmentDetailsResponse {
    data: DepartmentData;
}

export interface DepartmentData {
    id: number;
    Banner_title?: string;
    page_name_and_website_name?: string;
    content: DepartmentSection[];
    images: DepartmentImageGroup[];
}

export interface DepartmentSection {
    id: number;
    title: string | null;
    description: string;
}

export interface DepartmentImageGroup {
    id: number;
    image: {
        id: number;
        url: string;
    }[];
}

export async function Get<T, U = undefined>(url: string, params?: U): Promise<T> {
    const response = await axios.get<T>(`${BASE_URL}${url}`, { params });
    return response.data;
}

function formatDescription(text: string): string {
    return text
        .split('\n')                                // Split at newlines
        .map(line => line.trim())                   // Trim whitespace
        .filter(line => line !== "")                // Drop blank lines
        .map(line => /[.!:]$/.test(line) ? line : `${line}.`)  // Ensure punctuation
        .join('\n');                                // Rejoin with newlines
}


export const getDepartmentDetails = async (deptId: string): Promise<{
    title: string;
    sections: DepartmentSection[];
    images: string[];
}> => {
    const endpoint = API_MAP[deptId];
    if (!endpoint) throw new Error("Invalid department ID");

    const response = await Get<DepartmentDetailsResponse, undefined>(endpoint);
    const data = response.data;

    const title = data.Banner_title || data.page_name_and_website_name || "No Title";

    const sections = (data.content || [])
        .filter((section) =>
            // Keep sections that either have a non-empty title
            // OR have a non-empty description even if the title is null
            (section.title && section.title.trim() !== "") ||
            (section.description && section.description.trim() !== "")
        )
        .map((section) => ({
            ...section,
            description: formatDescription(section.description),
        }));


    const images = (data.images || []).flatMap((img) =>
        img.image.map((i) => (i.url.startsWith("http") ? i.url : `${BASE_URL}${i.url}`))
    );

    return { title, sections, images };
};
