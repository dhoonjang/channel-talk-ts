export declare type IWindow = typeof window & {
    ChannelIO: any;
    ChannelIOInitialized: boolean;
    attachEvent: any;
};
declare class ChannelService {
    pluginKey: string;
    constructor(pluginKey: string);
    loadScript(): void;
    boot(): void;
    shutdown(): void;
}
export default ChannelService;
