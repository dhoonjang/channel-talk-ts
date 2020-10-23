export declare type IWindow = typeof window & {
    ChannelIO: any;
    ChannelIOInitialized: boolean;
    attachEvent: any;
};
export default class ChannelService {
    private pluginKey;
    constructor(pluginKey: string);
    loadScript(): void;
    boot(): void;
    shutdown(): void;
}
