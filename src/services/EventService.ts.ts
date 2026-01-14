import EventClient from '../httpClient/EventClient';
import { EventModel } from '../models/Event';
import { EventDetail } from '../models/EventDetail';
import { RemoteEvent } from '../models/RemoteEvent';
import { RemoteEventDetail } from '../models/RemoteEventDetail';
import { GetEventsApiRequest, GetEventApiResponse, GetEventDetailApiRequest } from './types';

// EventService 클래스는 이벤트 배너를 가져오기 위한 서비스입니다.
export class EventService {
    [x: string]: any;
    private eventClient: EventClient;

    // AnnouncementService의 생성자입니다. AnnouncementClient 인스턴스를 받습니다.
    constructor(apiClient: EventClient) {
        this.eventClient = apiClient;
    }

    //이것 오른쪽 따라하기
    async getEvents(
        pageRows: number,
        pageNumber: number,
        q = '',
        languageType: string = 'en',
        operatingType?: string,
    ): Promise<EventModel[]> {
        const requestData: GetEventsApiRequest = {
            pageRows,
            pageNumber,
            q,
            languageType,
            operatingType,
        };

        if (operatingType) {
            requestData.operatingType = operatingType;
        }

        const apiResponse: GetEventApiResponse = await this.eventClient.getEvents(requestData);

        const remoteEvents: RemoteEvent[] = apiResponse.data.items;
        const events = remoteEvents.map((data) => new EventModel(data));

        return events;
    }

    /**
     * 이벤트 배너의 상세 정보를 가져옵니다.
     * @param boardIdx - 공지사항의 인덱스 (선택 사항)
     * @param languageType - 언어 타입 (기본값: 'en')
     * @returns Promise<EventDetail> - 공지사항 상세 정보
     */
    async getEventDetail(boardIdx?: string, languageType: string = 'en'): Promise<EventDetail> {
        const requestData: GetEventDetailApiRequest = {
            boardIdx,
            languageType,
        };

        const response = await this.eventClient.getEventDetail(requestData);
        const remoteEvent: RemoteEventDetail = response.data;
        console.log('remoteEvent:', remoteEvent);
        return new EventDetail(remoteEvent);
    }
}
