---
title: POST createPromoCode
---

# POST createPromoCode {#post-createpromocode}


Use this API method to create a promo code.

## Request

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| storeId | string (UUID) | Unique identifier of a store in PideDirecto. Required when storeIds is not provided. Use either storeId or storeIds. |
| storeIds | Array | undefined |
| &nbsp;&nbsp;[i] | string (UUID) | Unique identifier of a store in PideDirecto |
| code | string | The promo code string |
| description | string | undefined |
| promoType | [PromoType](#promo-type) | The type of promo code |
| discount | string | The discount value |
| discountType | [DiscountType](#discount-type) | The type of discount |
| customerIds | Array | undefined |
| &nbsp;&nbsp;[i] | string (UUID) | Unique identifier of a customer in PideDirecto |
| startsAt | string (Date) | The date when the promo code starts being valid |
| endsAt | string (Date) | The date when the promo code stops being valid |

## Response

Response Status Code 200

| Body Parameter | Type          | Description                                        |
| -------------- | ------------- | -------------------------------------------------- |
| promoCodeId    | string (UUID) | Unique identifier of the promo code in PideDirecto |
| code           | string        | The code of the promo code                         |

## Types

<!--@include: ../../types/promo-type.md-->

<!--@include: ../../types/discount-type.md-->

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name           | Description                                                                                                                                                |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400 - Bad Request           | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request                                                                   |
| 401 - Unauthorized          | UnauthorizedError    | - Not authorized to access one or more stores with the provided x-api-key - When storeIds is provided, all stores must have the same pideDirectoApiKey set |
| 500 - Internal Server Error | UnknownError         | An unknown server error has occurred, try again.                                                                                                           |

### Example

Request (single store with storeId):

```json
{
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad",
  "code": "SUMMER2024",
  "description": "Summer promotion discount",
  "promoType": "REUSABLE_PROMO",
  "discount": "15",
  "discountType": "PERCENT",
  "customerIds": ["a1b2c3d4-e5f6-7890-abcd-ef1234567890"],
  "startsAt": "2024-06-01T00:00:00Z",
  "endsAt": "2024-08-31T23:59:59Z"
}
```

Request (multiple stores with storeIds; all must have the same pideDirectoApiKey):

```json
{
  "storeIds": [
    "38981f83-853c-4193-a3c2-97f05582e0ad",
    "4b825ef7-f4ac-42ec-b1bb-8eb662ef7acb"
  ],
  "code": "SUMMER2024",
  "description": "Summer promotion discount",
  "promoType": "REUSABLE_PROMO",
  "discount": "15",
  "discountType": "PERCENT",
  "startsAt": "2024-06-01T00:00:00Z",
  "endsAt": "2024-08-31T23:59:59Z"
}
```

Response

```json
{
  "promoCodeId": "78dbea40-783e-4173-9215-da91cf8207a6",
  "code": "SUMMER2024"
}
```
