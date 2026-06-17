---
title: Changelog
---

## 2026

### 2026-06-15

- API - Added `kitchenStatus` to [POST getOrder](/api/orders/get-order) and [POST getOrders](/api/orders/get-orders) response.
- API - Added optional `orderStatus` parameter to [POST getOrders](/api/orders/get-orders) to filter orders by status.
- DOCS - Updated [POST getOrder](/api/orders/get-order) and [POST getOrders](/api/orders/get-orders) response to include `kitchenStatus`.
- DOCS - Updated [POST getOrders](/api/orders/get-orders) request to document `orderStatus` filter parameter.

### 2026-04-25

- DOCS - Added validation for `externalOrderId`: must be a unique ID, minimum 12 characters, alphanumeric.

### 2026-04-16

- API - Added [POST markOrderReadyForPickup](/api/orders/mark-order-ready-for-pickup) and [POST completeOrder](/api/orders/complete-order) to external API.

### 2026-04-06

- API - Removed `store.deliveryTime` from [POST getStoreCatalog](/api/store-catalog/get-store-catalog) response.
- DOCS - Updated [POST getStoreCatalog](/api/store-catalog/get-store-catalog) response documentation and example to omit delivery time.

### 2026-03-30

- API - Added new [POST getStoreCatalog](/api/store-catalog/get-store-catalog) endpoint to retrieve store catalog information including store details, brand, payment methods and product cancellation reasons.
- DOCS - Added Store Catalog API section and [POST getStoreCatalog](/api/store-catalog/get-store-catalog) endpoint documentation.

### 2026-02-09

- API - Added optional `storeIds` parameter to [POST createPromoCode](/api/promo-codes/create-promo-code) to support creating a promo code for multiple stores in a single request. When `storeIds` is provided, all stores must have the same `pideDirectoApiKey` (the one sent in the `x-api-key` header) configured.
- DOCS - Updated [POST createPromoCode](/api/promo-codes/create-promo-code) request to document `storeIds` and the requirement that all stores share the same `pideDirectoApiKey` when using multiple store IDs.

## 2025

### 2025-12-08

- API - Added [POST createPromoCode](/api/promo-codes/create-promo-code) endpoint.
- DOCS - Added PromoCode API section and [POST createPromoCode](/api/promo-codes/create-promo-code) endpoint documentation.

### 2025-10-28

- API - Added new [POST getStoreMenu](/api/products/get-store-menu) endpoint.
- DOCS - Updated [POST getStoreMenu](/api/products/get-store-menu) endpoint documentation.

### 2025-10-22

- API - Added support for tips in [POST getOrder](/api/orders/get-order) and [POST getOrders](/api/orders/get-orders) response.
- DOCS - Updated [POST getOrder](/api/orders/get-order) and [POST getOrders](/api/orders/get-orders) response to include tips.

### 2025-09-03

- API - Added support for `TRANSFER`, `CUSTOMER_CREDIT_ACCOUNT` and `MULTIPLE` payment methods for order response.
- DOCS - Updated [POST getOrder](/api/orders/get-order) and [POST getOrders](/api/orders/get-orders) `response.paymentMethod` to include `TRANSFER`, `CUSTOMER_CREDIT_ACCOUNT` and `MULTIPLE` payment methods.

### 2025-08-21

- API - Added `shortOrderId` to [POST getOrder](/api/orders/get-order) and [POST createDeliveryOrder](/api/orders/create-delivery-order) response.
- DOCS - Updated [POST getOrder](/api/orders/get-order) and [POST createDeliveryOrder](/api/orders/create-delivery-order) response tables with `shortOrderId` field.
- DOCS - Updated example responses to include `shortOrderId` field (uppercase format).

### 2025-08-12

- API - Added `notes` field to [POST createTakeAwayOrder](/api/orders/create-take-away-order) and [POST createDeliveryOrder](/api/orders/create-delivery-order) request.
- DOCS - Updated [POST createTakeAwayOrder](/api/orders/create-take-away-order) and [POST createDeliveryOrder](/api/orders/create-delivery-order) request with new `notes` field.

### 2025-08-06

- API - Added new [POST createTakeAwayOrder](/api/orders/create-take-away-order) endpoint.
- DOCS - Added [POST createTakeAwayOrder](/api/orders/create-take-away-order) documentation.

### 2025-06-16

- API - Added [POST getPosBusinessDaysSummary](/api/pos-business-day/get-pos-business-days-summary).
- DOCS - Added [POST getPosBusinessDaysSummary](/api/pos-business-day/get-pos-business-days-summary) documentation.

### 2025-05-29

- API - Added [POST getOrders](/api/orders/get-orders).
- DOCS - Added [POST getOrders](/api/orders/get-orders) documentation.

### 2025-03-26

- API - Added `pideDirectoProtectionCost` and `directoProtectionPaidByCustomer` to ORDER_CREATED webhook event response and [POST getOrder](/api/orders/get-order) response.
- DOCS - Added `pideDirectoProtectionCost` and `directoProtectionPaidByCustomer` to ORDER_CREATED webhook event response table and [POST getOrder](/api/orders/get-order) response table.

### 2025-01-21

- API - Added `directoProtectionCost` to [POST createDeliveryOrder](/api/orders/create-delivery-order) request.
- DOCS - Updated [POST createDeliveryOrder](/api/orders/create-delivery-order) with the `directoProtectionCost` request parameter.

## 2024

### 2024-12-17

- API - Added [POST getOrder](/api/orders/get-order) endpoint.
- DOCS - Added [POST getOrder](/api/orders/get-order) documentation with request and response examples.

### 2024-10-15

- API - Added `paymentLinkUrl` and `PAYMENT_LINK` `paymentMethod` to ORDER_CREATED webhook event.
- DOCS - Added `paymentLinkUrl` and `PAYMENT_LINK` `paymentMethod` to ORDER_CREATED webhook event.

### 2024-08-08

- DOCS - Added `PIDEDIRECTOPOS` as `app` for ORDER_CREATED webhook event.

### 2024-07-11

- API - Added new [POST createPaymentLink](/api/payment-links/create-payment-link).
- DOCS - Added [POST createPaymentLink](/api/payment-links/create-payment-link) documentation.
- DOCS - Updated index with payment link webhook events.

### 2024-06-25

- DOCS - Updated [POST getDeliveryEstimate](/api/orders/get-delivery-estimate) with request and response examples.

### 2024-05-27

- API - Added `PAYMENT_LINK` as type of `paymentMethod` in [POST createDeliveryOrder](/api/orders/create-delivery-order).
- API - Added new webhook event types: `PAYMENT_LINK_PAID`, `PAYMENT_LINK_FAILED`, `PAYMENT_LINK_CANCELLED`.
- API - Added card info and payments info to ORDER_CREATED webhook event response.
- DOCS - Updated [POST createDeliveryOrder](/api/orders/create-delivery-order) with the `PAYMENT_LINK` payment method request parameter.
- DOCS - Documented `PAYMENT_LINK_PAID`, `PAYMENT_LINK_FAILED` and `PAYMENT_LINK_CANCELLED` webhook events.
- DOCS - Updated ORDER_CREATED webhook event with card info and payments info response parameters.

### 2024-05-16

- API - Added `isBigOrder` to [POST createDeliveryOrder](/api/orders/create-delivery-order) request and ORDER_CREATED webhook event response.
- DOCS - Updated [POST createDeliveryOrder](/api/orders/create-delivery-order) with the `isBigOrder` request parameter.
- DOCS - Updated ORDER_CREATED webhook event with the `isBigOrder` response parameter.

## 2023

### 2023-10-03

- API - Added discount field to ORDER_CREATED webhook event.

### 2023-02-20

- API - Renamed `isWithinDeliveryRadius` to `deliveryAvailable` and added `deliveryNotAvailableReason` to [POST getDeliveryEstimate](/api/orders/get-delivery-estimate).
- DOCS - Added diagram to show the sequence of a delivery made in PideDirecto External API.

## 2022

### 2022-11-10

**API [BREAKING CHANGE]** — Renamed the following [POST uploadStoreMenu](/api/products/upload-store-menu) request parameters:

<div class="changelog-renames">

| Before | After |
| ------ | ----- |
| `storeMenu.categories[i].products[j].modifiers` | `modifierGroups` |
| `storeMenu.categories[i].products[j].modifiers[k].externalModifierId` | `externalModifierGroupId` |
| `storeMenu.categories[i].products[j].modifiers[k].modifierItems` | `modifiers` |
| `storeMenu.categories[i].products[j].modifiers[k].modifierItems[l].modifierId` | `externalModifierId` |
| `storeMenu.categories[i].products[j].modifiers[k].modifierItems[l].subModifiers` | `subModifierGroups` |
| `storeMenu.categories[i].products[j].modifiers[k].modifierItems[l].subModifiers[k].externalSubModifierId` | `externalSubModifierGroupId` |
| `storeMenu.categories[i].products[j].modifiers[k].modifierItems[l].subModifiers[k].subModifierItems` | `subModifiers` |
| `storeMenu.categories[i].products[j].modifiers[k].modifierItems[l].subModifiers[k].subModifierItems[l].externalSubModifierItemId` | `externalSubModifierId` |
| `storeMenu.modifierItems` | `modifiers` |

</div>

**API [BREAKING CHANGE]** — Renamed the following [ORDER_CREATED](/webhooks/order-created) webhook event body fields (old data is still sent for backwards compatibility but is deprecated and will be removed in the future):

<div class="changelog-renames">

| Before | After |
| ------ | ----- |
| `orderItems[i].modifiers` | `modifierGroups` |
| `orderItems[i].modifiers[j].externalModifierId` | `externalModifierGroupId` |
| `orderItems[i].modifiers[j].items` | `modifiers` |
| `orderItems[i].modifiers[j].items[k].externalModifierItemId` | `externalModifierId` |
| `orderItems[i].modifiers[j].items[k].subModifiers` | `subModifierGroups` |
| `orderItems[i].modifiers[j].items[k].subModifiers[l].externalSubModifierId` | `externalSubModifierGroupId` |
| `orderItems[i].modifiers[j].items[k].subModifiers[l].items` | `subModifiers` |
| `orderItems[i].modifiers[j].items[k].subModifiers[l].items[m].externalSubModifierItemId` | `externalSubModifierId` |

</div>

### 2022-06-14

- API - Changed [POST createDeliveryOrder](/api/orders/create-delivery-order) request requirements (added Neighborhood, ZipCode, City, State, Country).
- API - Added [POST getDriverPosition](/api/orders/get-driver-position) endpoint and documentation.
- API - Added `ApiCallLimitExceeded` error to [POST uploadStoreMenu](/api/products/upload-store-menu).
- DOCS - Renamed error name `OrderCannotBeCancelledError` to `OrderCannotBeCancelled`.

### 2022-05-20

- DOCS - Added subModifier and subModifier items to Order docs.

### 2022-04-28

- DOCS - Added External Modifier Id and External Option Item Id to Order Created update.

### 2022-03-15

- API - Added `didiFoodOrderId`, `uberEatsOrderId`, `rappiOrderId` and `app` to ORDER_CREATED webhook event.
- DOCS - Updated ORDER_CREATED webhook event with `didiFoodOrderId`, `uberEatsOrderId`, `rappiOrderId` and `app` information.

## 2021

### 2021-12-01

- API - Added `externalProductId` to [POST changeProductPrice](/api/products/change-product-price).
- DOCS - Updated [POST changeProductPrice](/api/products/change-product-price) with the `externalProductId` information.

### 2021-10-22

- API - Added new [POST changeProductPrice](/api/products/change-product-price) endpoint.

### 2021-10-20

- API - Added new reason `REJECTED_BY_ADMIN` for webhook event types ORDER_CANCELLED and ORDER_REJECTED.
- DOCS - Corrected some descriptions.

### 2021-10-04

- API - Added `reason` parameter to [POST cancelOrder](/api/orders/cancel-order) request.
- API - Added new [POST acceptOrder](/api/orders/accept-order).
- API - Added new [POST rejectOrder](/api/orders/reject-order).
- API - Added new [POST getDeliveryEstimate](/api/orders/get-delivery-estimate).
- API - Added body parameter to response in ORDER_CREATED webhook event.
- DOCS - Fixed spelling error `ocurredAt` → `occurredAt`.

### 2021-09-24

- API - Added reasons for webhook event types ORDER_CANCELLED and ORDER_REJECTED.
- API - Changed webhook event type `DELIVERY_DELIVERED` to `ORDER_COMPLETED`.
- DOCS - Updated events examples.
- DOCS - Made index more concise by removing sub-sub-headers.
- DOCS - Updated Webhooks section with more info.

### 2021-09-23

- API - Added new webhook event types: `ORDER_CREATED`, `ORDER_REJECTED`, `ORDER_ACCEPTED`, `ORDER_CANCELLED`.
- API - Added `occurredAt` to all webhook events.
- API - Flattened `data` field in webhook events.
- API - Changed name of webhook event type `DELIVERY_CANCELLED` to `DRIVER_CANCELLED`.
- DOCS - Updated tables and moved the required column into type column.
- DOCS - Removed webhook examples from index.
- DOCS - Described webhook events in more detail.
- DOCS - Corrected error docs: error JSON contains field `name` and not `error` as written in old docs.
- DOCS - Added more details about errors in "HTTP Status Codes and Errors".
- DOCS - Added more details about errors in each API endpoint "Response Error" section.
- DOCS - Updated cancel delivery section to explain when cancelling is possible.
