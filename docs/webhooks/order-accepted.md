---
title: ORDER_ACCEPTED
---

# ORDER_ACCEPTED {#order-accepted}


This event is will be emitted when an order with status NEW is accepted by the store.
Note that this event is not emitted for delivery orders since they are already in state ACCEPTED when created.

## Request body

| Body Parameter  | Type                      | Description                                             |
| --------------- | ------------------------- | ------------------------------------------------------- |
| orderId         | string (UUID)             | Unique identifier of the order in pidedirecto           |
| storeId         | string (UUID)             | The Store Id for the store that is sending the delivery |
| externalOrderId | string                    | undefined                                               |
| eventType | string | Always `ORDER_ACCEPTED` for this event                                       |
| occurredAt      | string (Date)             | The date time when the event occurred                   |

### Example

```json
{
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad",
  "externalOrderId": "id-283789500217743",
  "eventType": "ORDER_ACCEPTED",
  "occurredAt": "2021-09-15T19:32:37Z"
}
```
