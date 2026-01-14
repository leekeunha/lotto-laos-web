import { RemoteMonthlyHistoryItem } from '../services/types';
import { PointHistory } from './PointHistoryItem'; // 이미 정의된 PointHistoryItem 클래스를 가져옵니다.

export default class MonthlyHistoryItem {
    #yearMonth: string;
    #historyItems: PointHistory[];

    constructor(remoteMonthlyHistoryItem: RemoteMonthlyHistoryItem) {
        this.#yearMonth = remoteMonthlyHistoryItem.yearMonth;
        this.#historyItems = remoteMonthlyHistoryItem.historyItems.map(
            (item) => new PointHistory(item),
        );
    }

    get yearMonth(): string {
        return this.#yearMonth;
    }

    get historyItems(): PointHistory[] {
        return this.#historyItems;
    }
}
