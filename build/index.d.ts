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
    constructor(settings: IChannelServiceSettings);
    loadScript(): void;
    boot(): void;
    hideMessenger(): void;
    showMessenger(): void;
    openChat(chatId: number): void;
    shutdown(): void;
}
export default ChannelService;
