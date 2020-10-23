"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChannelService {
    constructor(pluginKey) {
        this.pluginKey = pluginKey;
        this.loadScript();
    }
    loadScript() {
        let chanelWindow = window;
        if (chanelWindow.ChannelIO) {
            return (window.console.error || window.console.log || function () { })("ChannelIO script included twice.");
        }
        let ch = function () {
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
            let s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
            s.charset = "UTF-8";
            let x = document.getElementsByTagName("script")[0];
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
    }
    boot() {
        const { ChannelIO } = window;
        ChannelIO("boot", {
            pluginKey: this.pluginKey,
        });
    }
    shutdown() {
        const { ChannelIO } = window;
        ChannelIO("shutdown");
    }
}
exports.default = ChannelService;
