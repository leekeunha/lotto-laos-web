import AnnouncementClient from '../httpClient/AnnouncementClient';
import { Announcement } from '../models/Announcement';
import { AnnouncementDetail } from '../models/AnnouncementDetail';
import { RemoteAnnouncement } from '../models/RemoteAnnouncement';
import { RemoteAnnouncementDetail } from '../models/RemoteAnnouncementDetail';
import {
    GetAnnouncementDetailApiRequest,
    GetAnnouncementsApiRequest,
    GetAnnouncementsApiResponse,
} from './types';

// AnnouncementService 클래스는 공지사항 데이터를 가져오기 위한 서비스입니다.
export class AnnouncementService {
    private announcementClient: AnnouncementClient;

    // AnnouncementService의 생성자입니다. AnnouncementClient 인스턴스를 받습니다.
    constructor(apiClient: AnnouncementClient) {
        this.announcementClient = apiClient;
    }

    /**
     * 공지사항 데이터를 가져옵니다.
     * @param page_rows - 페이지 당 행 수 (기본값: 10)
     * @param page_number - 페이지 번호 (기본값: 1)
     * @param q - (선택 사항) 검색어
     * @returns Promise<Announcement[]> - 공지사항 데이터의 배열
     */
    async getAnnouncements(
        pageRows: number,
        pageNumber: number,
        q = '',
        languageType: string = 'en',
    ): Promise<Announcement[]> {
        const requestData: GetAnnouncementsApiRequest = {
            pageRows,
            pageNumber,
            q,
            languageType,
        };

        const apiResponse: GetAnnouncementsApiResponse =
            await this.announcementClient.getAnnouncements(requestData);

        const remoteAnnouncements: RemoteAnnouncement[] = apiResponse.data.items;
        const announcements = remoteAnnouncements.map((data) => new Announcement(data));
        return announcements;
    }

    /**
     * 특정 공지사항의 상세 정보를 가져옵니다.
     * @param boardIdx - 공지사항의 인덱스 (선택 사항)
     * @param languageType - 언어 타입 (기본값: 'en')
     * @returns Promise<AnnouncementDetail> - 공지사항 상세 정보
     */
    async getAnnouncementDetail(
        boardIdx?: string,
        languageType: string = 'en',
    ): Promise<AnnouncementDetail> {
        const requestData: GetAnnouncementDetailApiRequest = {
            boardIdx,
            languageType,
        };

        const response = await this.announcementClient.getAnnouncementDetail(requestData);
        const remoteAnnouncement: RemoteAnnouncementDetail = response.data;
        return new AnnouncementDetail(remoteAnnouncement);
    }
}
