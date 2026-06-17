---
title: PAYMENT_LINK_CANCELLED
---

# PAYMENT_LINK_CANCELLED {#payment-link-cancelled}


This event is emitted when a paymentLink is paid.

## Request body

| Body Parameter | Type                              | Description                                                |
| -------------- | --------------------------------- | ---------------------------------------------------------- |
| paymentLinkId  | string (UUID)                     | Unique identifier of the paymentLink in pidedirecto        |
| orderId        | string (UUID)                     | Unique identifier of the order in pidedirecto              |
| storeId        | string (UUID)                     | The Store Id for the store that is sending the delivery    |
| amount         | number                            | The total amount of the payment link                       |
| status         | [PaymentLinkStatus](#payment-link-status)              | Status of the payment link |
| url            | string                            | A URL for pay the paymentLink                              |
| eventType | string | Always `PAYMENT_LINK_CANCELLED` for this event                                          |
| occurredAt     | string (Date)                     | The date time when the event occurred                      |

### Example

```json
{
  "paymentLinkId": "126ad949-cf4e-4fdd-86f0-b74fc2611874",
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad",
  "amount": 100,
  "status": "CANCELLED",
  "url": "https://myrestaurant.test.pidedirecto.mx/paymentlink/7TLvvnVAWoNwFKVJNfzFaL",
  "eventType": "PAYMENT_LINK_CANCELLED",
  "occurredAt": "2021-09-15T19:32:37Z"
}
```

## Types

<!--@include: ../types/payment-link-status.md-->
