import {
    ActivateBankApiRequest,
    AddBankApiRequest,
    EditBankApiRequest,
    GetMyBanksApiRequest,
    RemoveBankApiRequest,
} from './types';
import BankClient from '../httpClient/MyBankClient';
import { RemoteMyBank } from '../models/RemoteMyBank';
import { MyBank } from '../models/MyBank';
import { BankDetail } from '../models/BankDetail';
import { RemoteBankDetail } from '../models/RemoteBankDetail';

export class BankService {
    private bankClient: BankClient;

    /**
     * BankService 클래스의 생성자입니다.
     * @param apiClient - API 통신을 위한 BankClient 인스턴스
     */
    constructor(apiClient: BankClient) {
        this.bankClient = apiClient;
    }

    /**
     *  내 은행 목록을 가져오는 메서드입니다.
     * @param pageRows - 페이지당 항목 수
     * @param pageNumber - 현재 페이지 번호
     * @returns MyBank 모델 배열을 반환합니다.
     */
    async getMyBanks(pageRows: number, pageNumber: number): Promise<MyBank[]> {
        const requestData: GetMyBanksApiRequest = {
            pageRows,
            pageNumber,
        };

        const response = await this.bankClient.getMyBanks(requestData);

        const remoteMyBanks: RemoteMyBank[] = response.data.items;
        return remoteMyBanks.map((data) => new MyBank(data));
    }

    /**
     *  특정 은행 계좌를 활성화하는 메서드입니다.
     * @param requestData - 활성화할 계좌의 ID와 활성화 상태를 포함한 객체
     * @returns 활성화 성공 여부를 반환합니다.
     */
    async activateBank(requestData: ActivateBankApiRequest): Promise<boolean> {
        const response = await this.bankClient.activateBank(requestData);

        const isSuccess: boolean = response.data;

        return isSuccess;
    }

    /**
     *  특정 은행 계좌를 삭제하는 메서드입니다.
     * @param requestData - 삭제할 은행 계좌의 ID를 포함한 객체
     * @returns 삭제 성공 여부를 반환합니다.
     */
    async removeBank(requestData: RemoveBankApiRequest): Promise<boolean> {
        const response = await this.bankClient.removeBank(requestData.memberBankIdx);

        const isSuccess: boolean = response.data;

        return isSuccess;
    }

    async addBank(requestData: AddBankApiRequest): Promise<boolean> {
        const response = await this.bankClient.addBank(requestData);

        const isSuccess: boolean = response.data;

        return isSuccess;
    }

    async editBank(requestData: EditBankApiRequest): Promise<boolean> {
        const response = await this.bankClient.editBank(requestData);

        const isSuccess: boolean = response.data;

        return isSuccess;
    }

    async getBankDetail(memberBankIdx: string): Promise<BankDetail> {
        const response = await this.bankClient.getBankDetail(memberBankIdx);
        const remoteBankDetail: RemoteBankDetail = response.data;

        return new BankDetail(remoteBankDetail);
    }
}
