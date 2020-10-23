export declare type IWindow = typeof window & {
    ChannelIO: any;
    ChannelIOInitialized: boolean;
    attachEvent: any;
};
declare class ChannelService {
    private pluginKey;
    constructor(pluginKey: string);
    loadScript(): void;
    boot(): void;
    shutdown(): void;
}
export default ChannelService;
