---
title: POST createPaymentLink
---

Use this API method to create a payment link. The payment link created will not be linked to any order. Currently, the
only way to create an order with paymentLink is only creating a delivery order, see [createDeliveryorder](/api/orders/create-delivery-order).

## Request

| Body Parameter | Type          | Description                                                                 |
| -------------- | ------------- | --------------------------------------------------------------------------- |
| storeId        | string (UUID) | The Store Id for the store that is creating the payment link.               |
| amount         | number        | The total amount of the payment link. The amount must be greater than zero. |

## Response

Response Status Code 200

| Body Parameter | Type          | Description                                          |
| -------------- | ------------- | ---------------------------------------------------- |
| paymentLinkId  | string (UUID) | Unique identifier of the payment link in PideDirecto |
| paymentLinkUrl | string        | A URL for pay the paymentLink                        |

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
  "amount": 100
}
```

Response

```json
{
  "paymentLinkId": "78dbea40-783e-4173-9215-da91cf8207a6",
  "paymentLinkUrl": "https://myrestaurant.test.pidedirecto.mx/paymentlink/7TLvvnVAWoNwFKVJNfzFaL"
}
```
