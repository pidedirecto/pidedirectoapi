---
title: POST getStoreCatalog
---

# POST getStoreCatalog {#post-getstorecatalog}


Use this API method to get the catalog information of a store, including store details, brand information, payment methods and product cancellation reasons.

## Request

| Body Parameter | Type          | Description                                   |
| -------------- | ------------- | --------------------------------------------- |
| storeId        | string (UUID) | Unique identifier of the store in PideDirecto |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| store | object | Store details |
| &nbsp;&nbsp;name | string | The name of the store |
| &nbsp;&nbsp;phone | string | The phone number of the store |
| &nbsp;&nbsp;address | string | undefined |
| &nbsp;&nbsp;hours | string | The operating hours of the store |
| brand | object | undefined |
| &nbsp;&nbsp;brandId | string (UUID) | Unique identifier of the brand in PideDirecto |
| &nbsp;&nbsp;name | string | The name of the brand |
| &nbsp;&nbsp;storeIds | Array | List of store IDs associated with the brand |
| &nbsp;&nbsp;&nbsp;&nbsp;[i] | string (UUID) | Unique identifier of a store in PideDirecto |
| paymentMethods | Array | undefined |
| &nbsp;&nbsp;[i] | Object | A payment method |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentMethodId | string (UUID) | Unique identifier of the payment method |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentMethod | string | The type of payment method |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | The display name of the payment method |
| &nbsp;&nbsp;&nbsp;&nbsp;channels | Array | List of channels where this payment method is available |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | string | A channel app identifier |
| &nbsp;&nbsp;&nbsp;&nbsp;orderTypes | Array | List of order types that support this payment method |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | string | An order type identifier |
| productCancellationReasons | Array | undefined |
| &nbsp;&nbsp;[i] | Object | A product cancellation reason |
| &nbsp;&nbsp;&nbsp;&nbsp;reason | string | The cancellation reason text |
| discountComments | Array | undefined |
| &nbsp;&nbsp;[i] | Object | A discount comment |
| &nbsp;&nbsp;&nbsp;&nbsp;comment | string | The discount comment text |

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name           | Description                                                                              |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| 400 - Bad Request           | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request |
| 401 - Unauthorized          | UnauthorizedError    | - Not authorized to access the store with the provided x-api-key                         |
| 500 - Internal Server Error | UnknownError         | An unknown server error has occurred, try again.                                         |

### Example

Request:

```json
{
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad"
}
```

Response

```json
{
  "store": {
    "name": "My Store",
    "phone": "+525512345678",
    "address": "Av. Reforma 123, Ciudad de Mexico",
    "hours": "Mon-Fri 9:00-21:00"
  },
  "brand": {
    "brandId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "My Brand",
    "storeIds": [
      "38981f83-853c-4193-a3c2-97f05582e0ad",
      "4b825ef7-f4ac-42ec-b1bb-8eb662ef7acb"
    ]
  },
  "paymentMethods": [
    {
      "paymentMethodId": "78dbea40-783e-4173-9215-da91cf8207a6",
      "paymentMethod": "CREDIT_CARD",
      "name": "Credit Card",
      "channels": ["PIDEDIRECTOAPP"],
      "orderTypes": ["DELIVERY_ORDER", "TAKE_AWAY_ORDER"]
    },
    {
      "paymentMethodId": "b9c0d1e2-f3a4-5678-bcde-f12345678901",
      "paymentMethod": "CASH",
      "name": "Cash",
      "channels": ["PIDEDIRECTOAPP"],
      "orderTypes": ["DELIVERY_ORDER"]
    }
  ],
  "productCancellationReasons": [
    { "reason": "Out of stock" },
    { "reason": "Item discontinued" }
  ],
  "discountComments": [
    { "comment": "Employee discount" },
    { "comment": "Loyalty reward" }
  ]
}
```
