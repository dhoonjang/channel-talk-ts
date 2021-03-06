var ChannelService = /** @class */ (function () {
    function ChannelService(settings) {
        this.settings = settings;
        this.loadScript();
    }
    ChannelService.prototype.loadScript = function () {
        var chanelWindow = window;
        if (chanelWindow.ChannelIO) {
            return (window.console.error || window.console.log || function () { })("ChannelIO script included twice.");
        }
        var ch = function () {
            ch.c(arguments);
        };
        ch.q = [];
        ch.c = function (args) {
            ch.q.push(args);
        };
        chanelWindow.ChannelIO = ch;
        function load() {
            var _a;
            if (chanelWindow.ChannelIOInitialized)
                return;
            chanelWindow.ChannelIOInitialized = true;
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
            s.charset = "UTF-8";
            var x = document.getElementsByTagName("script")[0];
            (_a = x.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(s, x);
        }
        if (document.readyState === "complete") {
            load();
        }
        else if (chanelWindow.attachEvent) {
            chanelWindow.attachEvent("onload", load);
        }
        else {
            window.addEventListener("DOMContentLoaded", load, false);
            window.addEventListener("load", load, false);
        }
    };
    ChannelService.prototype.boot = function () {
        var ChannelIO = window.ChannelIO;
        ChannelIO("boot", this.settings);
    };
    ChannelService.prototype.hideMessenger = function () {
        var ChannelIO = window.ChannelIO;
        ChannelIO("hideMessenger");
    };
    ChannelService.prototype.showMessenger = function () {
        var ChannelIO = window.ChannelIO;
        ChannelIO("showMessenger");
    };
    ChannelService.prototype.openChat = function (chatId) {
        var ChannelIO = window.ChannelIO;
        ChannelIO("openChat", chatId);
    };
    ChannelService.prototype.shutdown = function () {
        var ChannelIO = window.ChannelIO;
        ChannelIO("shutdown");
    };
    return ChannelService;
}());

export default ChannelService;
//# sourceMappingURL=index.es.js.map
