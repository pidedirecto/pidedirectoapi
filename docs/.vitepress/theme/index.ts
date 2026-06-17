import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./custom.css";

const redirects: Record<string, string> = {
  "/webhook-events": "/webhooks/order-created",
};

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ router }) {
    router.onBeforeRouteChange = (to: string) => {
      const path = to.replace(/\.html$/i, "").split("#")[0];
      const target = redirects[path];
      if (target) {
        setTimeout(() => router.go(target));
        return false;
      }
    };
  },
};
