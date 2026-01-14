import { RemoteDrawVideo } from '../services/types';

export class DrawVideo {
    #drawVideoIdx: string;
    #drawVideoUrl: string;
    #drawIdx: string;
    #winningDate: Date | null;

    constructor(remoteDrawVideo: RemoteDrawVideo) {
        this.#drawVideoIdx = remoteDrawVideo.draw_video_idx;
        this.#drawVideoUrl = remoteDrawVideo.draw_video_url;
        this.#drawIdx = remoteDrawVideo.draw_idx;
        this.#winningDate = remoteDrawVideo.winning_date
            ? new Date(remoteDrawVideo.winning_date)
            : null;
    }

    get drawVideoIdx(): string {
        return this.#drawVideoIdx;
    }

    get drawVideoUrl(): string {
        return this.#drawVideoUrl;
    }

    get drawIdx(): string {
        return this.#drawIdx;
    }

    get winningDate(): Date | null {
        return this.#winningDate;
    }
}
