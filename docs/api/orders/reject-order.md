---
title: POST rejectOrder
---

# POST rejectOrder {#post-rejectorder}


Use this API method to reject an order that was ordered from PideDirecto webpage or app.
Orders can only be rejected as long as the customer did not reject the order (as long as order status is NEW).
If store cannot reject an order it has to be accepted, see [POST rejectOrder](/api/orders/reject-order) api call.

## Request

| Body Parameter | Type                                                                                                                                                                                                                                                                                 | Description                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| orderId        | string                                                                                                                                                                                                                                                                               | Unique identifier of the order in PideDirecto |
| reason         | [OrderCancelReason](#order-cancel-reason) | Reason why the order is rejected              |

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
| 400 - Bad Request           | OrderCannotBeCancelled | Order cannot be rejected since current order state does not allow it                     |
| 500 - Internal Server Error | UnknownError           | An unknown server error has occurred, try again.                                         |

### Example

Request:

```json
{
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a"
}
```
