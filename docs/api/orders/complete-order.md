---
title: POST completeOrder
---

Use this API method to complete an order. The order must be in status **ACCEPTED** and must not have pending separated orders; otherwise the request may fail.

## Request

| Body Parameter | Type   | Description                                   |
| -------------- | ------ | --------------------------------------------- |
| orderId        | string | Unique identifier of the order in PideDirecto |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| N/A            | N/A  | N/A         |

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
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a"
}
```
