---
title: POST getPosBusinessDaysSummary
---

# POST getPosBusinessDaysSummary {#post-getposbusinessdayssummary}


Use this api to get info from multiple posBusinessDays in the date range.

## Request

| Body Parameter | Type          | Description                                   |
| -------------- | ------------- | --------------------------------------------- |
| storeId        | string (UUID) | Unique identifier of the store in PideDirecto |
| startDate      | Date          | undefined                                     |
| endDate        | Date          | undefined                                     |

## Response

Response Status Code 200

The response of this API will be a list of the following object

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| posBusinessDayId | string (UUID) | Unique identifier of the posBusinessDay created. |
| openedAt | string (Date) | Date the order last modified. |
| closedAt | string (Date) | undefined |
| orders | number | The number of orders consider by the pos business day |
| totalWithTaxes | number | The total amount of the orders including taxes |
| totalWithoutTaxes | number | The total amount of the orders discounting the taxes |
| totalByPaymentMethod | Array | undefined |
| &nbsp;&nbsp;[i] | Object | A payment method total |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentMethod | string | The name of the paymentMethod |
| &nbsp;&nbsp;&nbsp;&nbsp;total | number | The total corresponding to the payment method |
| orderTaxes | Array | undefined |
| &nbsp;&nbsp;[i] | Object | An order tax |
| &nbsp;&nbsp;&nbsp;&nbsp;taxName | string | The name of the applied tax |
| &nbsp;&nbsp;&nbsp;&nbsp;total | number | The total corresponding to the tax applied |

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name           | Description                                                                              |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| 400 - Bad Request           | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request |
| 500 - Internal Server Error | UnknownError         | - An unknown server error has occurred, try again.                                       |

### Example

Request

```json
{
  "storeId": "8ab03a24-e63f-4296-a8a3-4a8cf6709e15",
  "startDate": "2021-09-15T19:32:37Z",
  "endDate": "2021-10-15T19:32:37Z"
}
```

### Example

Response:

```json
[
  {
    "posBusinessDayId": "8ab03a24-e63f-4296-a8a3-4a8cf6709e15",
    "openedAt": "2021-09-15T19:32:37Z",
    "closedAt": "2021-10-15T19:32:37Z",
    "orders": 100,
    "totalWithTaxes": 10000,
    "totalWithoutTaxes": 8400,
    "totalByPaymentMethod": [
      {
        "CREDIT_CARD": 5000
      },
      {
        "CASH": 5000
      }
    ],
    "orderTaxes": [
      {
        "IVA": 1600
      }
    ]
  }
]
```
