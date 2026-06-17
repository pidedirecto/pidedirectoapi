---
title: ORDER_CANCELLED
---

# ORDER_CANCELLED {#order-cancelled}


This event is emitted when order is cancelled.

## Request body

| Body Parameter  | Type                                                                                                                                                                                                                                                                                 | Description                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| orderId         | string (UUID)                                                                                                                                                                                                                                                                        | Unique identifier of the order in pidedirecto           |
| storeId         | string (UUID)                                                                                                                                                                                                                                                                        | The Store Id for the store that is sending the delivery |
| externalOrderId | string                                                                                                                                                                                                                                                                               | undefined                                               |
| eventType | string | Always `ORDER_CANCELLED` for this event |
| occurredAt      | string (Date)                                                                                                                                                                                                                                                                        | The date time when the event occurred                   |
| reason          | [OrderCancelReason](#order-cancel-reason) | Reason why the order was cancelled                      |

### Example

```json
{
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad",
  "externalOrderId": "id-283789500217743",
  "eventType": "ORDER_CANCELLED",
  "occurredAt": "2021-09-15T19:32:37Z",
  "reason": "DRIVER_NOT_FOUND"
}
```

## Types

<!--@include: ../types/order-cancel-reason.md-->
