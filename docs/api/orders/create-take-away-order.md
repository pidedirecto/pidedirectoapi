---
title: POST createTakeAwayOrder
---

# POST createTakeAwayOrder {#post-createtakeawayorder}


Use this API method to request a takeaway order.

## Request

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| storeId | string (UUID) | The Store Id for the store that is sending the delivery |
| customerName | string | Name of the customer |
| customerPhoneNumber | string | Phone number to the customer |
| paymentMethod | [CreateOrderPaymentMethod](#create-order-payment-method) | Payment method for the order. If `CARD`, the driver will not charge the customer. If `PAYMENT_LINK`, a payment link is created with the order total. |
| orderCost | string (number) | The cost of the order. |
| items | Array | undefined |
| &nbsp;&nbsp;[i] | Object | An order item. |
| &nbsp;&nbsp;&nbsp;&nbsp;menuItemId | string (UUID) | Menu item ID from getStoreMenu. Either menuItemId or externalProductId must identify a valid product for the store. |
| &nbsp;&nbsp;&nbsp;&nbsp;externalProductId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Display name of the product. |
| &nbsp;&nbsp;&nbsp;&nbsp;unitPrice | string (number) | Unit price of the item (e.g. "99.50"). |
| &nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity ordered. |
| &nbsp;&nbsp;&nbsp;&nbsp;note | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;modifierGroups | Array | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | Object | A modifier group. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifierGroupId | string (UUID) | Modifier group ID from getStoreMenu. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Display name of the modifier group. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierGroupId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifiers | Array | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[k] | Object | A modifier. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifierId | string (UUID) | Modifier (menu item) ID from getStoreMenu. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Display name of the modifier. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string (number) | Unit price of the modifier (e.g. "10.00"). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity of this modifier. |
| pickupTime | string (Date) | undefined |
| externalOrderId | string | Make sure it is an unique ID, minimum 12 characters, alphanumeric |
| notes | string | undefined |
| webhookUrl | string (URL) | undefined |
| webhookHeaders | Object | undefined |

## Response

Response Status Code 200

| Body Parameter | Type          | Description                                   |
| -------------- | ------------- | --------------------------------------------- |
| orderId        | string (UUID) | Unique identifier of the order in PideDirecto |
| trackingUrl    | string        | undefined                                     |
| paymentLinkUrl | string        | undefined                                     |

## Types

<!--@include: ../../types/create-order-payment-method.md-->

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name           | Description                                                                              |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| 400 - Bad Request           | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request |
| 500 - Internal Server Error | UnknownError         | An unknown server error has occurred, try again.                                         |

### Example

Request:

```json
{
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad",
  "customerName": "John Doe",
  "customerPhoneNumber": "+521550000000",
  "paymentMethod": "CASH",
  "orderCost": "100.50",
  "items": [
    {
      "menuItemId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "externalProductId": "prod-001",
      "name": "Hamburger",
      "unitPrice": "99.50",
      "quantity": 2,
      "note": "No onions"
    },
    {
      "menuItemId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "name": "Large Fries",
      "unitPrice": "45.00",
      "quantity": 1
    }
  ],
  "pickupTime": null,
  "externalOrderId": "id-283789500217743",
  "webhookUrl": null,
  "notes": "Notes related to my order. i.g (Add extra fries)"
}
```

Response

```json
{
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "trackingUrl": "https://tktsixcentenario.test.pidedirecto.mx/paymentlink/7TLvvnVAWoNwFKVJNfzFaL"
}
```
