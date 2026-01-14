import { InquiryDetail } from '../models/InquiryDetail';
import { RemoteInquiry } from '../models/RemoteInquiry';
import { RemoteInquiryDetail } from '../models/RemoteInquiryDetail';
import { AddInquiryApiRequest, GetInquiriesApiRequest, GetInquiriesApiResponse } from './types';
import { Inquiry } from '../models/Inquiry';
import InquiryClient from '../httpClient/InquiryClient';
import { DESC } from '../../constants/global';

// InquiryService 클래스는 공지사항 데이터를 가져오기 위한 서비스입니다.
export class InquiryService {
    private inquiryClient: InquiryClient;

    // InquiryService 생성자입니다. InquiryClient 인스턴스를 받습니다.
    constructor(apiClient: InquiryClient) {
        this.inquiryClient = apiClient;
    }

    /**
     * 공지사항 데이터를 가져옵니다.
     * @param page_rows - 페이지 당 행 수 (기본값: 5)
     * @param page_number - 페이지 번호 (기본값: 1)
     * @param board_subject - (선택 사항) 게시판 주제
     * @returns Promise<OneToOneInquiriesInfo>  - 1:1 문의 데이터의 배열
     */
    async getInquiries(pageRows: number, pageNumber: number, sortOrder = DESC): Promise<Inquiry[]> {
        const requestData: GetInquiriesApiRequest = {
            pageRows,
            pageNumber,
            sortOrder,
        };

        const apiResponse: GetInquiriesApiResponse =
            await this.inquiryClient.getInquiries(requestData);

        const RemoteInquiries: RemoteInquiry[] = apiResponse.data.items;
        const inquiries = RemoteInquiries.map((data) => new Inquiry(data));
        return inquiries;
    }

    async addInquiry(requestData: AddInquiryApiRequest) {
        const response = await this.inquiryClient.addInquiry(requestData);
        const isSucess: boolean = response.data.Result;
        return isSucess;
    }

    async getInquiryDetail(id: string): Promise<InquiryDetail> {
        const inquiry_idx = parseInt(id, 10);

        const response = await this.inquiryClient.getInquiryDetail(inquiry_idx);
        const remoteOneToOneInquiry: RemoteInquiryDetail = response.data;
        return new InquiryDetail(remoteOneToOneInquiry);
    }
}
