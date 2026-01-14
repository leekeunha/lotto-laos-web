import FaqClient from '../httpClient/FaqClient';
import { Faq } from '../models/Faq';
import { RemoteFaq } from '../models/RemoteFaq';
import { GetFaqsApiRequest, GetFaqsApiResponse } from './types';

// FaqService 클래스는 공지사항 데이터를 가져오기 위한 서비스입니다.
export class FaqService {
    private FaqClient: FaqClient;

    // FaqService의 생성자입니다. FaqClient 인스턴스를 받습니다.
    constructor(apiClient: FaqClient) {
        this.FaqClient = apiClient;
    }

    /**
     * 공지사항 데이터를 가져옵니다.
     * @param page_rows - 페이지 당 행 수 (기본값: 10)
     * @param page_number - 페이지 번호 (기본값: 1)
     * @param board_subject - (선택 사항) 게시판 주제
     * @returns Promise<Faq[]> - 공지사항 데이터의 배열
     */
    async getFaqs(
        pageRows: number,
        pageNumber: number,
        q = '',
        languageType: string = 'en',
        category?: string,
    ): Promise<Faq[]> {
        const requestData: GetFaqsApiRequest = {
            pageRows,
            pageNumber,
            q,
            languageType,
            category,
        };

        const apiResponse: GetFaqsApiResponse = await this.FaqClient.getFaqs(requestData);

        const remoteFaqs: RemoteFaq[] = apiResponse.data.items;
        const faqs = remoteFaqs.map((remoteFaq) => new Faq(remoteFaq));
        return faqs;
    }
}
