import { RemoteUser } from '../services/types';

export default class User {
    #email?: string;
    #refreshToken: string;
    #accessToken: string;
    #firstName?: string;
    #lastName?: string;
    #fullName?: string;
    #emailVerified?: boolean;
    #kycVerified?: boolean;
    #memberId?: string;
    #memberType?: string;
    #memberIdx?: number;
    #accessTokenExpire?: string;
    #refreshTokenExpire?: string;
    #languageType: string;
    #imageUrl?: string;
    #referralCode: string;
    #bankCount: number;
    #gender: string;
    #state: { value: string; label: string } | null;
    #district: { value: string; label: string } | null;
    #addressDetail: string;

    constructor(remoteUser: RemoteUser) {
        this.#email = remoteUser.memberEmail;
        this.#fullName = remoteUser.memberName;
        this.#emailVerified = remoteUser.emailVerified;
        this.#kycVerified = remoteUser.kycVerified;
        this.#memberId = remoteUser.memberId;
        this.#memberType = remoteUser.memberType;
        this.#memberIdx = remoteUser.memberIdx;
        this.#accessToken = remoteUser.accessToken as string;
        this.#accessTokenExpire = remoteUser.accessTokenExpire;
        this.#refreshToken = remoteUser.refreshToken as string;
        this.#refreshTokenExpire = remoteUser.refreshTokenExpire;
        this.#languageType = remoteUser.languageType as string;
        this.#imageUrl = remoteUser.memberProfilePhotoUrl;
        this.#referralCode = remoteUser.referralCode;
        this.#bankCount = remoteUser.bankCount;

        this.#gender = remoteUser.memberGender;
        //this.#state = remoteUser.state;

        this.#state = remoteUser.state
            ? {
                  value: remoteUser.state.id,
                  label: remoteUser.state.name,
              }
            : null; // 없으면 null 할당

        this.#district = remoteUser.district
            ? {
                  value: remoteUser.district.id,
                  label: remoteUser.district.name,
              }
            : null; // 없으면 null 할당
        this.#addressDetail = remoteUser.addressDetail;
    }

    get email() {
        return this.#email;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get fullName() {
        return this.#fullName;
    }

    get emailVerified() {
        return this.#emailVerified;
    }

    get kycVerified() {
        return this.#kycVerified;
    }

    get memberId() {
        return this.#memberId;
    }

    get memberType() {
        return this.#memberType;
    }

    get memberIdx() {
        return this.#memberIdx;
    }

    get accessToken() {
        return this.#accessToken;
    }

    get accessTokenExpire() {
        return this.#accessTokenExpire;
    }

    get refreshToken() {
        return this.#refreshToken;
    }

    get refreshTokenExpire() {
        return this.#refreshTokenExpire;
    }

    get language() {
        return this.#languageType;
    }

    get imageUrl() {
        return this.#imageUrl;
    }

    get referralCode() {
        return this.#referralCode;
    }

    get bankCount() {
        return this.#bankCount;
    }

    get state() {
        return this.#state;
    }

    get district() {
        return this.#district;
    }

    get addressDetail() {
        return this.#addressDetail;
    }

    get gender() {
        return this.#gender;
    }
}
