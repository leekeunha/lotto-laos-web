import UserClient from '../httpClient/UserClient';
import User from '../models/User';
import {
    SignupApiRequest,
    SignupApiResponse,
    RemoteUser,
    ChangePasswordApiRequest,
    ChangeLanguageApiRequst,
    CheckDuplicateApiRequest,
    SignInApiRequest,
    SaveFcmTokenApiRequest,
    VerifyCurrentPasswordApiRequest,
} from './types';

export class UserService {
    private userClient: UserClient;

    constructor(apiClient: UserClient) {
        this.userClient = apiClient;
    }

    /**
     * 사용자를 회원가입 시킵니다.
     * @param identifier - 사용자의 이메일
     * @param password - 사용자의 비밀번호
     * @returns Promise<User> - 생성된 사용자 객체
     */
    async signup(requestData: SignupApiRequest): Promise<User> {
        const response: SignupApiResponse = await this.userClient.signup(requestData);
        const remoteUser: RemoteUser = response.data;
        return new User(remoteUser);
    }

    /**
     * 사용자를 로그인 시킵니다.
     * @param identifier - 사용자의 이메일
     * @param password - 사용자의 비밀번호
     * @returns Promise<User> - 로그인된 사용자 객체
     */
    async signin(requestData: SignInApiRequest): Promise<User> {
        const response = await this.userClient.signin(requestData);

        const resposeData: RemoteUser = response.data;

        return new User(resposeData);
    }

    async changePassword(requestData: ChangePasswordApiRequest): Promise<boolean> {
        const response = await this.userClient.changePassword(requestData);

        const isSuccess: boolean = response.data;

        return isSuccess;
    }

    async changeUserLanguageInServer(languageType: string): Promise<boolean> {
        const requestData: ChangeLanguageApiRequst = { languageType };
        const response = await this.userClient.changeUserLanguageInServer(requestData);

        const isSuccess: boolean = response.data;

        return isSuccess;
    }

    async getCurrentUserInfo(): Promise<User> {
        const response = await this.userClient.getCurrentUserInfo();

        const resposeData: RemoteUser = response.data;

        return new User(resposeData);
    }

    async checkDuplicate(requestData: CheckDuplicateApiRequest): Promise<boolean> {
        const response = await this.userClient.checkDuplicate(requestData);

        const resposeData: boolean = response.data;

        return resposeData;
    }

    async saveFcmToken(requestData: SaveFcmTokenApiRequest): Promise<boolean> {
        const response = await this.userClient.saveFcmToken(requestData);

        const resposeData: boolean = response.data;

        return resposeData;
    }

    async editProfile(requestData: FormData): Promise<boolean> {
        const response = await this.userClient.editProfile(requestData);

        const resposeData: boolean = response.data;

        return resposeData;
    }

    async verifyCurrentPassword(requestData: VerifyCurrentPasswordApiRequest): Promise<boolean> {
        const response = await this.userClient.verifyCurrentPassword(requestData);

        const resposeData: boolean = response.data;

        return resposeData;
    }
}
