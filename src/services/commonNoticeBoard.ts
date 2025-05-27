import { Get } from "../utils/apiServices";

const noticeBoard = "/common-notice-board";

export interface CommonNoticeBoardResponse {
  data: NoticeBoardData;
}

export interface NoticeBoardData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  notice_board: NoticeBoard;
}

export interface NoticeBoard {
  id: number;
  title: string;
  subtitle: string;
  list: NoticeItem[];
}

export interface NoticeItem {
  id: number;
  title: string;
  Description: string;
  Read_More_text: string;
  Read_More_link: string;
}

export const getNoticeBoardPage =
  async (): Promise<CommonNoticeBoardResponse> => {
    const url = `${noticeBoard}?populate[notice_board][populate]=*`;
    const response = await Get<CommonNoticeBoardResponse, undefined>(
      url,
      undefined
    );
    return response;
  };
