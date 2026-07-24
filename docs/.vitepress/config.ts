import { defineConfig } from "vitepress";

export default defineConfig({
  title: "PideDirecto API",
  description: "External API documentation for PideDirecto integrations",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/images/logo.png",
    logoLink: "/",
    nav: [
      { text: "Guide", link: "/" },
      { text: "API", link: "/api/products/upload-store-menu" },
      { text: "Webhooks", link: "/guide/webhooks" },
      { text: "Changelog", link: "/changelog" },
    ],
    sidebar: [
      {
        text: "Guide",
        collapsed: false,
        items: [
          { text: "Getting Started", link: "/" },
          { text: "Environments", link: "/guide/environments" },
          { text: "Authentication", link: "/guide/authentication" },
          { text: "Errors", link: "/guide/errors" },
          { text: "Webhooks", link: "/guide/webhooks" },
        ],
      },
      {
        text: "API Reference",
        collapsed: false,
        items: [
          {
            text: "Products",
            collapsed: false,
            items: [
              {
                text: "uploadStoreMenu",
                link: "/api/products/upload-store-menu",
              },
              {
                text: "uploadStoreMenuV2",
                link: "/api/products/upload-store-menu-v2",
              },
              { text: "getStoreMenu", link: "/api/products/get-store-menu" },
              {
                text: "changeProductPrice",
                link: "/api/products/change-product-price",
              },
              { text: "hideProduct", link: "/api/products/hide-product" },
              { text: "unHideProduct", link: "/api/products/un-hide-product" },
            ],
          },
          {
            text: "Orders",
            collapsed: false,
            items: [
              { text: "getOrder", link: "/api/orders/get-order" },
              { text: "getOrders", link: "/api/orders/get-orders" },
              { text: "acceptOrder", link: "/api/orders/accept-order" },
              { text: "rejectOrder", link: "/api/orders/reject-order" },
              {
                text: "getDeliveryEstimate",
                link: "/api/orders/get-delivery-estimate",
              },
              {
                text: "createDeliveryOrder",
                link: "/api/orders/create-delivery-order",
              },
              {
                text: "createTakeAwayOrder",
                link: "/api/orders/create-take-away-order",
              },
              { text: "cancelOrder", link: "/api/orders/cancel-order" },
              {
                text: "cancelOrderWithPaymentTerminalRefund",
                link: "/api/orders/cancel-order-with-payment-terminal-refund",
              },
              {
                text: "markOrderReadyForPickup",
                link: "/api/orders/mark-order-ready-for-pickup",
              },
              { text: "completeOrder", link: "/api/orders/complete-order" },
              {
                text: "getDriverPosition",
                link: "/api/orders/get-driver-position",
              },
            ],
          },
          {
            text: "Payment Links",
            collapsed: false,
            items: [
              {
                text: "createPaymentLink",
                link: "/api/payment-links/create-payment-link",
              },
            ],
          },
          {
            text: "Promo Codes",
            collapsed: false,
            items: [
              {
                text: "createPromoCode",
                link: "/api/promo-codes/create-promo-code",
              },
            ],
          },
          {
            text: "Store Catalog",
            collapsed: false,
            items: [
              {
                text: "getStoreCatalog",
                link: "/api/store-catalog/get-store-catalog",
              },
            ],
          },
          {
            text: "POS Business Day",
            collapsed: false,
            items: [
              {
                text: "getPosBusinessDaysSummary",
                link: "/api/pos-business-day/get-pos-business-days-summary",
              },
            ],
          },
        ],
      },
      {
        text: "Webhook Events",
        collapsed: false,
        items: [
          {
            text: "Order events",
            collapsed: false,
            items: [
              { text: "ORDER_CREATED", link: "/webhooks/order-created" },
              { text: "ORDER_REJECTED", link: "/webhooks/order-rejected" },
              { text: "ORDER_ACCEPTED", link: "/webhooks/order-accepted" },
              { text: "ORDER_PREPARED", link: "/webhooks/order-prepared" },
              { text: "ORDER_CANCELLED", link: "/webhooks/order-cancelled" },
              { text: "ORDER_COMPLETED", link: "/webhooks/order-completed" },
            ],
          },
          {
            text: "Driver events",
            collapsed: false,
            items: [
              {
                text: "DRIVER_ACCEPTED_DELIVERY",
                link: "/webhooks/driver-accepted-delivery",
              },
              {
                text: "DRIVER_ARRIVED_AT_STORE",
                link: "/webhooks/driver-arrived-at-store",
              },
              {
                text: "DRIVER_PICKED_UP_DELIVERY",
                link: "/webhooks/driver-picked-up-delivery",
              },
              {
                text: "DRIVER_ARRIVED_AT_CLIENT",
                link: "/webhooks/driver-arrived-at-client",
              },
              { text: "DRIVER_CANCELLED", link: "/webhooks/driver-cancelled" },
            ],
          },
          {
            text: "Payment link events",
            collapsed: false,
            items: [
              {
                text: "PAYMENT_LINK_PAID",
                link: "/webhooks/payment-link-paid",
              },
              {
                text: "PAYMENT_LINK_FAILED",
                link: "/webhooks/payment-link-failed",
              },
              {
                text: "PAYMENT_LINK_CANCELLED",
                link: "/webhooks/payment-link-cancelled",
              },
            ],
          },
        ],
      },
      {
        text: "Changelog",
        link: "/changelog",
      },
    ],
    socialLinks: [],
    search: {
      provider: "local",
    },
  },
  head: [
    ["meta", { name: "theme-color", content: "#e63946" }],
    ["link", { rel: "icon", href: "/images/logo.png", type: "image/png" }],
  ],
});
