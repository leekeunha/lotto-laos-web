import { GetMessagesApiRequest, GetMessagesApiResponse, GetMessageDetailApiRequest } from './types';
import MessageClient from '../httpClient/MessageClient';
import { Message } from '../models/Message';
import { MessageDetail } from '../models/MessageDetail';
import { RemoteMessage } from '../models/RemoteMessage';
import { RemoteMessageDetail } from '../models/RemoteMessageDetail';

// MessageService 클래스는 message 데이터를 가져오기 위한 서비스입니다.
export class MessageService {
    private messageClient: MessageClient;

    // MessageService 생성자입니다. MessageClient 인스턴스를 받습니다.
    constructor(apiClient: MessageClient) {
        this.messageClient = apiClient;
    }

    /**
     * Message 데이터를 가져옵니다.
     * @param pageRows - 페이지 당 행 수 (기본값: 20)
     * @param pageNumber - 페이지 번호 (기본값: 1)
     * @returns Promise<Message[]> - Message 데이터의 배열
     */
    async getMessages(pageRows: number, pageNumber: number): Promise<Message[]> {
        const requestData: GetMessagesApiRequest = {
            pageRows,
            pageNumber,
        };

        const apiResponse: GetMessagesApiResponse =
            await this.messageClient.getMessages(requestData);

        const remoteResults: RemoteMessage[] = apiResponse.data;
        const resultData = remoteResults.map((data) => new Message(data));

        return resultData;
    }

    /**
     * Message 상세 데이터를 가져옵니다.
     * @param messageIdx - 메시지 인덱스 값
     * @returns Promise<MessageDetail> - Message Detail 데이터
     */
    async getMessageDetail(messageIdx: number): Promise<MessageDetail> {
        const requestData: GetMessageDetailApiRequest = {
            messageIdx,
        };

        const response = await this.messageClient.getMessageDetail(requestData);
        const remoteMessageDetail: RemoteMessageDetail = response.data;
        return new MessageDetail(remoteMessageDetail);
    }

    /**
     * Message 읽음 처리를 합니다.
     * @param messageIdx - 메시지 인덱스 값
     */
    async readMessage(messageIdx: number) {
        return this.messageClient.readMessage(messageIdx);
    }
}
