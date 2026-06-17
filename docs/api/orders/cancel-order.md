---
title: POST cancelOrder
---

# POST cancelOrder {#post-cancelorder}


Use this API method to cancel an order. Orders can only be cancelled if no driver has accepted the order.
As soon as a driver has accepted the order or order is already cancelled/rejected/completed/delivered an error with name `OrderCannotBeCancelled` will be returned.

## Request

| Body Parameter | Type                                                                                                                                                                                                                                                                                 | Description                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| orderId        | string                                                                                                                                                                                                                                                                               | Unique identifier of the order in PideDirecto |
| reason         | [OrderCancelReason](#order-cancel-reason) | Reason why the order is cancelled             |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| N/A            | N/A  | N/A         |

## Types

<!--@include: ../../types/order-cancel-reason.md-->

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name             | Description                                                                              |
| --------------------------- | ---------------------- | ---------------------------------------------------------------------------------------- |
| 400 - Bad Request           | InvalidArgumentError   | - Required parameter not sent in request - Parameter type is not correct in sent request |
| 400 - Bad Request           | OrderCannotBeCancelled | Order cannot be cancelled since current order state does not allow it                    |
| 500 - Internal Server Error | UnknownError           | An unknown server error has occurred, try again.                                         |

### Example

Request:

```json
{
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "reason": "CLOSING_SOON"
}
```
