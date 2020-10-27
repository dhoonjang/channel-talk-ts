export declare type IWindow = typeof window & {
    ChannelIO: any;
    ChannelIOInitialized: boolean;
    attachEvent: any;
};
export interface IChannelServiceSettings {
    pluginKey: string;
    customLauncherSelector?: string;
    hideChannelButtonOnBoot?: boolean;
    profile?: {
        name: string;
        mobileNumber: string;
    };
}
declare class ChannelService {
    private settings;
    constructor();
    loadScript(): void;
    boot(settings?: IChannelServiceSettings, callback?: (error: Error, user: any) => void): void;
    hideMessenger(): void;
    showMessenger(): void;
    openChat(chatId: number): void;
    shutdown(): void;
}
declare const _default: ChannelService;
export default _default;
