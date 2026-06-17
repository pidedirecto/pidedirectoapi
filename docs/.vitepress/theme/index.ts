import DefaultTheme from 'vitepress/theme'
import './custom.css'

const redirects: Record<string, string> = {
  '/webhook-events': '/webhooks/order-created',
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    router.onBeforeRouteChange = (to: string) => {
      const path = to.replace(/\.html$/i, '').split('#')[0]
      const target = redirects[path]
      if (target) {
        setTimeout(() => router.go(target))
        return false
      }
    }
  },
}
