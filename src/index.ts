export type IWindow = typeof window & {
  ChannelIO: any;
  ChannelIOInitialized: boolean;
  attachEvent: any;
};

class ChannelService {
  private pluginKey: string;

  constructor(pluginKey: string) {
    this.pluginKey = pluginKey;
    this.loadScript();
  }

  loadScript() {
    let chanelWindow: IWindow = window as IWindow;

    if (chanelWindow.ChannelIO) {
      return (window.console.error || window.console.log || function () {})(
        "ChannelIO script included twice."
      );
    }

    let ch: any = function () {
      ch.c(arguments);
    };

    ch.q = [];
    ch.c = function (args: any) {
      ch.q.push(args);
    };
    chanelWindow.ChannelIO = ch;

    function load() {
      if (chanelWindow.ChannelIOInitialized) return;

      chanelWindow.ChannelIOInitialized = true;
      let s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
      s.charset = "UTF-8";
      let x = document.getElementsByTagName("script")[0];
      x.parentNode?.insertBefore(s, x);
    }

    if (document.readyState === "complete") {
      load();
    } else if (chanelWindow.attachEvent) {
      chanelWindow.attachEvent("onload", load);
    } else {
      window.addEventListener("DOMContentLoaded", load, false);
      window.addEventListener("load", load, false);
    }
  }

  boot() {
    const { ChannelIO }: IWindow = window as IWindow;
    ChannelIO("boot", {
      pluginKey: this.pluginKey,
    });
  }

  shutdown() {
    const { ChannelIO }: IWindow = window as IWindow;
    ChannelIO("shutdown");
  }
}

export default ChannelService;
