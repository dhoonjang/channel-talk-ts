export declare type IWindow = typeof window & {
    ChannelIO: any;
    ChannelIOInitialized: boolean;
    attachEvent: any;
};
declare class ChannelService {
    constructor();
    loadScript(): void;
    boot(pluginKey: string): void;
    shutdown(): void;
}
declare const _default: ChannelService;
export default _default;
