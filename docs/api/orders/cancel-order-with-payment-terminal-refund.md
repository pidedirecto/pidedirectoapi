---
title: POST cancelOrderWithPaymentTerminalRefund
---

# POST cancelOrderWithPaymentTerminalRefund {#post-cancelorderwithpaymentterminalrefund}


Use this API method to refund the Kushki payment terminal charge linked to an order and reject the order. For orders paid with Kushki terminal (e.g. kiosk), including COMPLETE orders that cannot use [POST cancelOrder](/api/orders/cancel-order).

## Request

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| orderId | string | Unique identifier of the order in PideDirecto |
| reason | [OrderCancelReason](#order-cancel-reason) | Same values as [POST cancelOrder](/api/orders/cancel-order) |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| orderId | string | Unique identifier of the order in PideDirecto |
| orderStatus | [OrderStatus](#order-status) | Order status after the operation |
| paymentTerminalPaymentId | string (UUID) | Original terminal payment id on the order |
| refundPaymentTerminalPaymentId | string (UUID) | Terminal refund payment id |
| orderRejectedAt | string (Date) | undefined |
| refundedAt | string (Date) | undefined |

## Types

<!--@include: ../../types/order-cancel-reason.md-->

<!--@include: ../../types/order-status.md-->

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes | Error Name | Description |
| --------------------------- | ---------------------- | ---------------------------------------------------------------------------------------- |
| 400 - Bad Request | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request |
| 400 - Bad Request | CancelOrderWithPaymentTerminalRefundError | `errors[].code`: `NO_KUSHKI_TERMINAL_PAYMENT`, `MULTIPLE_KUSHKI_TERMINAL_PAYMENTS`, `PAYMENT_TERMINAL_ID_MISSING` |
| 422 - Unprocessable Entity | CancelOrderWithPaymentTerminalRefundError | Kushki refund declined (`errors[].code` = `KUSHKI_REFUND_DECLINED`) |
| 500 - Internal Server Error | UnknownError | An unknown server error has occurred, try again. |

### Example

Request:

```json
{
  "orderId": "4a86de79-e4a6-4ba9-8052-566646041334",
  "reason": "OTHER"
}
```

Response:

```json
{
  "orderId": "4a86de79-e4a6-4ba9-8052-566646041334",
  "orderStatus": "REJECTED",
  "paymentTerminalPaymentId": "3a0f50aa-c622-4461-b3fa-94fb14d3dd59",
  "refundPaymentTerminalPaymentId": "2a86266a-0bfb-411f-9f5d-f47ae453a271",
  "orderRejectedAt": "2026-07-15T00:47:26.355Z",
  "refundedAt": "2026-07-15T00:47:26.221Z"
}
```
