---
title: DRIVER_CANCELLED
---

# DRIVER_CANCELLED {#driver-cancelled}


This event is emitted when a driver who accepted the delivery for some reason will not deliver the delivery.
It does not mean that the order is cancelled or rejected. However when order is cancelled or rejected this event will also be emitted if a driver has accepted the delivery already.
To react on order cancelled or rejected listen to event types ORDER_CANCELLED and ORDER_REJECTED instead.

## Request body

| Body Parameter  | Type                        | Description                                             |
| --------------- | --------------------------- | ------------------------------------------------------- |
| orderId         | string (UUID)               | Unique identifier of the order in pidedirecto           |
| storeId         | string (UUID)               | The Store Id for the store that is sending the delivery |
| externalOrderId | string                      | undefined                                               |
| eventType | string | Always `DRIVER_CANCELLED` for this event                                       |
| occurredAt      | string (Date)               | The date time when the event occurred                   |

### Example

```json
{
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad",
  "externalOrderId": "id-283789500217743",
  "eventType": "DRIVER_CANCELLED",
  "occurredAt": "2021-09-15T19:32:37Z"
}
```
