---
title: POST getOrders
---

Use this API method to get info from multiple orders in a date range.

## Request

| Body Parameter | Type                                                                                                                                    | Description                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| storeId        | string (UUID)                                                                                                                           | Unique identifier of the store in PideDirecto                                                           |
| startDate      | Date                                                                                                                                    | Start of the date range (inclusive).                                                                    |
| endDate        | Date                                                                                                                                    | End of the date range (exclusive).                                                                      |
| orderStatus    | [OrderStatusFilter](#order-status-filter) | Optional. Filter orders by status. When omitted, orders of all statuses in the date range are returned. |

## Response

Response Status Code 200

The response of this API will be a list of the following object

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| orderId | string (UUID) | Unique identifier of the order created. |
| storeId | string (UUID) | Unique identifier of the store. |
| externalOrderId | string | undefined |
| didiFoodOrderId | string | undefined |
| rappiOrderId | string | undefined |
| uberEatsOrderId | string | undefined |
| didiFoodOrderIndex | string | undefined |
| storeName | string | Name of the store. |
| storeStreet | string | Street of the store. |
| storeLocation | Object | GPS coordinates of the store. |
| &nbsp;&nbsp;lat | number | Latitude GPS coordinate. |
| &nbsp;&nbsp;lng | number | Longitude GPS coordinate. |
| customerId | string (UUID) | Unique identifier of the customer in pidedirecto. |
| customerEmail | string | undefined |
| customerName | string | Name of the customer. |
| customerPhoneNumber | string | Phone number to the customer. |
| customerAddress | Object | undefined |
| &nbsp;&nbsp;location | Object | GPS coordinates of the delivery address. |
| &nbsp;&nbsp;&nbsp;&nbsp;lat | number | Latitude GPS coordinate. |
| &nbsp;&nbsp;&nbsp;&nbsp;lng | number | Longitude GPS coordinate. |
| &nbsp;&nbsp;street | string | Street name and number of the delivery address. |
| &nbsp;&nbsp;instructions | string | undefined |
| orderStatus | [OrderStatus](#order-status) | If created from the PideDirecto webpage or app, status is `NEW` and must be accepted or rejected. Orders created via API or PideDirecto Admin are `ACCEPTED`. |
| kitchenStatus | [KitchenStatus](#kitchen-status) | Kitchen preparation progress in the kitchen display system (KDS). |
| orderType | [OrderType](#order-type) | The type of the order. |
| orderItems | Array | All order items ordered in this order. |
| &nbsp;&nbsp;[i] | Object | An order item. |
| &nbsp;&nbsp;&nbsp;&nbsp;productId | string (UUID) | Product id of this order item. |
| &nbsp;&nbsp;&nbsp;&nbsp;externalProductId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this order item. |
| &nbsp;&nbsp;&nbsp;&nbsp;unitPrice | string (number) | Unit price of this order item. |
| &nbsp;&nbsp;&nbsp;&nbsp;discountedUnitPrice | string (number) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity of this order item. |
| &nbsp;&nbsp;&nbsp;&nbsp;promoText | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;note | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;modifierGroups | Array | All modifiers attached to this order item. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | Object | A modifier. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierGroupId | string (UUID) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this modifier group, e.g. "Excluded ingredients". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifiers | Array | All modifiers attached to this modifier group. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[k] | Object | A modifier. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this modifier, e.g. "Onions". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string (number) | Price of this modifier (Unit Price). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity of this modifier. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifierGroups | Array | A sub-modifier group. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[l] | Object | A sub-modifier group. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalSubModifierGroupId | string (UUID) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this sub-modifier group, e.g. "Excluded ingredients". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifiers | Array | All sub-modifiers attached to this sub-modifier group. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[m] | Object | A sub-modifier. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalSubModifierId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this sub-modifier, e.g. "Onions". |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string (number) | Price of this sub-modifier (Unit Price). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity of this sub-modifier. |
| driverInstructions | string | undefined |
| deliverySecurityCode | string | undefined |
| instructions | string | undefined |
| notes | string | undefined |
| paymentLinkUrl | string | Payment link URL, exists only if paymentMethod is "PAYMENT_LINK". |
| paymentMethod | [PaymentMethod](#payment-method) | Payment method for the order. If `CARD`, the driver will not charge the customer. |
| posTipType | [DiscountType](#discount-type) | Indicates if the tip is a amount or a percentage |
| tips | Array | List of all added tips |
| &nbsp;&nbsp;[i] | Object | A tip entry. |
| &nbsp;&nbsp;&nbsp;&nbsp;tipType | [DiscountType](#discount-type) | The tye of the tip |
| &nbsp;&nbsp;&nbsp;&nbsp;tipAmount | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;tipPercentage | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;customerNumber | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentMethod | [PaymentMethod](#payment-method) | The payment method for the string |
| &nbsp;&nbsp;&nbsp;&nbsp;customPaymentMethod | string | undefined |
| predefinedTipPercentage | number | undefined |
| predefinedTipAmount | string | undefined |
| payments | Array | undefined |
| &nbsp;&nbsp;[i] | Object | Contains the payment information. |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentTerminalPaymentId | string (UUID) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;amount | string | Amount of the payment. |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentMethod | [PaymentMethod](#payment-method) | The payment method of the payments[i]. |
| &nbsp;&nbsp;&nbsp;&nbsp;cardNumber | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;cardType | [CardType](#card-type) | undefined |
| cardNumber | string | undefined |
| cardType | [CardType](#card-type) | undefined |
| productDiscount | string (number) | undefined |
| promoCode | string (number) | undefined |
| promoCodeDiscount | string (number) | undefined |
| discount | string (number) | undefined |
| deliveryCost | string (number) | undefined |
| pideDirectoProtectionCost | string | undefined |
| directoProtectionPaidByCustomer | boolean | undefined |
| subtotal | string (number) | Total cost of the order items without discount. |
| total | string (number) | Total cost that the customer pays for the order (delivery cost included). |
| pickupTime | string (Date) | undefined |
| pickupTimeType | [PickupTimeType](#pickup-time-type) | undefined |
| preparationTime | number | undefined |
| isBigOrder | boolean | undefined |
| app | [App](#app) | Name of the App where the order was created. |
| acceptedAt | string (Date) | undefined |
| arrivedAtStoreAt | string (Date) | undefined |
| arrivedAtClientAt | string (Date) | undefined |
| autoAcceptAt | string (Date) | undefined |
| autoMarkOrderReadyToPickupAt | string (Date) | undefined |
| autoRefundAt | string (Date) | undefined |
| cancelledAt | string (Date) | undefined |
| completedAt | string (Date) | undefined |
| deliveredAt | string (Date) | undefined |
| deliveryAcceptedAt | string (Date) | undefined |
| markedReadyForPickupAt | string (Date) | undefined |
| pickedUpAt | string (Date) | undefined |
| refundedAt | string (Date) | undefined |
| rejectedAt | string (Date) | undefined |
| modifiedAt | string (Date) | Date the order last modified. |
| createdAt | string (Date) | Date the order created. |

## Types

<!--@include: ../../types/order-status-filter.md-->

<!--@include: ../../types/order-status.md-->

<!--@include: ../../types/kitchen-status.md-->

<!--@include: ../../types/order-type.md-->

<!--@include: ../../types/payment-method.md-->

<!--@include: ../../types/card-type.md-->

<!--@include: ../../types/pickup-time-type.md-->

<!--@include: ../../types/discount-type.md-->

<!--@include: ../../types/app.md-->

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name           | Description                                                                                                                       |
| --------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 400 - Bad Request           | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request - orderStatus is not a valid OrderStatus |
| 500 - Internal Server Error | UnknownError         | - An unknown server error has occurred, try again.                                                                                |

### Example

Request:

```json
{
  "storeId": "8ab03a24-e63f-4296-a8a3-4a8cf6709e15",
  "startDate": "2021-09-15T19:32:37Z",
  "endDate": "2021-10-15T19:32:37Z",
  "orderStatus": "NEW"
}
```

### Example

Response:

```json
[
  {
    "orderId": "730e3c7f-8921-4fa9-b560-6c714b594559",
    "storeId": "91bdaf57-50f3-4fd6-984e-0397840a6487",
    "externalOrderId": "id-adda13289134546",
    "orderStatus": "NEW",
    "kitchenStatus": "PREPARING",
    "orderType": "DELIVERY_ORDER",
    "pickupTime": "2021-10-05T14:00:00Z",
    "storeName": "Burger Heaven",
    "storeStreet": "Cheese Street 123",
    "storeLocation": {
      "lat": 25.6931231234563,
      "lng": -100.3212312312312
    },
    "customerName": "CarmenXia",
    "customerPhoneNumber": "+521550000000",
    "customerAddress": {
      "location": {
        "lat": 25.694577790668273,
        "lng": -100.3163661637494
      },
      "street": "Av Alfonso Reyes 2071",
      "instructions": "Leave it at outside the door"
    },
    "subtotal": "159.99",
    "productDiscount": "10",
    "promoCode": "WOW20FREE",
    "promoCodeDiscount": "20",
    "deliveryCost": "40",
    "total": "169.99",
    "paymentMethod": "CARD",
    "cardNumber": "****4242",
    "cardType": "DEBIT",
    "tips": [
      {
        "tipType": "AMOUNT",
        "tipAmount": "50",
        "paymentMethod": "CASH"
      }
    ],
    "payments": [
      {
        "paymentTerminalPaymentId": "6efaa5c9-1e1a-4fec-ba72-d2b76d480a9e",
        "amount": "169.99",
        "paymentMethod": "PAYMENT_TERMINAL",
        "cardNumber": "****4242",
        "cardType": "DEBIT"
      }
    ],
    "orderItems": [
      {
        "productId": "6f844cbb-b102-463a-9b92-0b7921d30bc1",
        "name": "Cheeseburger",
        "unitPrice": "129.99",
        "quantity": "1",
        "modifierGroups": [
          {
            "name": "Drinks",
            "modifiers": [
              {
                "name": "Coffee",
                "price": "0",
                "quantity": 1,
                "subModifierGroups": [
                  {
                    "name": "Type of Milk",
                    "subModifiers": [
                      {
                        "name": "Oat Milk",
                        "price": "0",
                        "quantity": 1
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "productId": "d2d2146c-3ef4-4e24-9fb6-b3564076cc5c",
        "name": "Coca Cola",
        "unitPrice": "30",
        "discountedUnitPrice": "20",
        "quantity": "1",
        "note": "no ice",
        "modifierGroups": [
          {
            "name": "Excluded ingredients",
            "modifiers": [
              {
                "name": "Onions",
                "price": "0"
              }
            ]
          }
        ]
      }
    ]
  }
]
```
