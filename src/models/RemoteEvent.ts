import { OPERATINGTYPE } from './types';

export type RemoteEvent = {
    rowNum: string;
    boardId: string;
    boardIdx: string;
    boardSubIdx: number;
    boardSubject: string;
    notice: string;
    memberType: string;
    memberIdx: string;
    memberEmail: string;
    memberName: string;
    hit: number;
    useTag: string;
    createdAt: string;
    operatingType: OPERATINGTYPE;
    imageUrl: string;
    mobileImageThumbUrl: string;
    new: string;
};
