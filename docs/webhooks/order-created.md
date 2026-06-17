---
title: ORDER_CREATED
---

# ORDER_CREATED {#order-created}


This event is will be emitted when a new order is created.

## Request body

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| orderId | string (UUID) | Unique identifier of the order in pidedirecto |
| app | [App](#app) | Name of the App where the order was created |
| storeId | string (UUID) | The Store Id for the store that is sending the delivery |
| externalOrderId | string | undefined |
| didiFoodOrderId | string | undefined |
| didiFoodOrderIndex | string | undefined |
| rappiOrderId | string | undefined |
| uberEatsOrderId | string | undefined |
| eventType | string | Always `ORDER_CREATED` for this event |
| occurredAt | string (Date) | The date time when the event occurred |
| orderStatus | [OrderStatus](#order-status) | If created from the PideDirecto webpage or app, status is `NEW` and must be accepted or rejected. Orders created via API or PideDirecto Admin are `ACCEPTED`. |
| orderType | [OrderType](#order-type) | The type of the order |
| pickupTime | string (Date) | undefined |
| pickupTimeType | [PickupTimeType](#pickup-time-type) | undefined |
| storeName | string | Name of the store |
| storeStreet | string | Street of the store |
| storeLocation | Object | GPS coordinates of the store |
| &nbsp;&nbsp;lat | number | Latitude GPS coordinate |
| &nbsp;&nbsp;lng | number | Longitude GPS coordinate |
| customerId | string (UUID) | Unique identifier of the customer in pidedirecto |
| customerName | string | Name of the customer |
| customerEmail | string | undefined |
| customerPhoneNumber | string | Phone number to the customer |
| customerAddress | Object | undefined |
| &nbsp;&nbsp;location | Object | GPS coordinates of the delivery address |
| &nbsp;&nbsp;&nbsp;&nbsp;lat | number | Latitude GPS coordinate |
| &nbsp;&nbsp;&nbsp;&nbsp;lng | number | Longitude GPS coordinate |
| &nbsp;&nbsp;street | string | Street name and number of the delivery address |
| &nbsp;&nbsp;instructions | string | undefined |
| subtotal | string (number) | Total cost of the order items without discount |
| productDiscount | string (number) | undefined |
| promoCode | string (number) | undefined |
| promoCodeDiscount | string (number) | undefined |
| discount | string (number) | undefined |
| isBigOrder | boolean | undefined |
| deliveryCost | string (number) | undefined |
| pideDirectoProtectionCost | string | undefined |
| directoProtectionPaidByCustomer | boolean | undefined |
| total | string (number) | Total cost that the customer pays for the order (delivery cost included) |
| paymentLinkUrl | string | Payment link URL, exists only if paymentMethod is "PAYMENT_LINK". |
| paymentMethod | [PaymentMethod](#payment-method) | Payment method for the order. If `CARD`, the driver will not charge the customer. |
| cardNumber | string | undefined |
| cardType | [CardType](#card-type) | undefined |
| payments | Array | undefined |
| &nbsp;&nbsp;[i] | Object | Contains the payment information |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentTerminalPaymentId | string (UUID) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;amount | string | Amount of the payment |
| &nbsp;&nbsp;&nbsp;&nbsp;paymentMethod | [PaymentEntryPaymentMethod](#payment-entry-payment-method) | The payment method of the payments[i] |
| &nbsp;&nbsp;&nbsp;&nbsp;cardNumber | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;cardType | [CardType](#card-type) | undefined |
| orderItems | Array | All order items ordered in this order |
| &nbsp;&nbsp;[i] | Object | An order item |
| &nbsp;&nbsp;&nbsp;&nbsp;productId | string (UUID) | Product id of this order item |
| &nbsp;&nbsp;&nbsp;&nbsp;externalProductId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this order item |
| &nbsp;&nbsp;&nbsp;&nbsp;unitPrice | string (number) | Unit price of this order item |
| &nbsp;&nbsp;&nbsp;&nbsp;discountedUnitPrice | string (number) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity of this order item |
| &nbsp;&nbsp;&nbsp;&nbsp;promoText | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;note | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;modifierGroups | Array | All modifiers attached to this order item |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | Object | A modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierGroupId | string (UUID) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this modifier group, e.g. "Excluded ingredients" |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifiers | Array | All modifiers attached to this modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[k] | Object | A modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this modifier, e.g. "Onions" |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string (number) | Price of this modifier (Unit Price) |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity of this modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifierGroups | Array | A sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[l] | Object | A sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalSubModifierGroupId | string (UUID) | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this sub-modifier group, e.g. "Excluded ingredients" |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifiers | Array | All sub-modifiers attached to this sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[m] | Object | A sub-modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalSubModifierId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this sub-modifier, e.g. "Onions" |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string (number) | Price of this sub-modifier (Unit Price) |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity | number | Quantity of this sub-modifier |

### Example

```json
{
  "orderId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "storeId": "38981f83-853c-4193-a3c2-97f05582e0ad",
  "externalOrderId": "id-283789500217743",
  "eventType": "ORDER_CREATED",
  "occurredAt": "2021-09-15T19:32:37Z",
  "orderStatus": "NEW",
  "orderType": "DELIVERY_ORDER",
  "pickupTime": "2021-10-05T14:00:00Z",
  "storeName": "Burger Heaven",
  "storeStreet": "Cheese Street 123",
  "storeLocation": {
    "lat": 25.6931231234563,
    "lng": -100.3212312312312
  },
  "customerName": "John Doe",
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
  "payments": [
    {
      "paymentTerminalPaymentId": "4698b9e3-3115-4964-bde1-f51722330c6f",
      "amount": "169.99",
      "paymentMethod": "PAYMENT_TERMINAL",
      "cardNumber": "****4242",
      "cardType": "DEBIT"
    }
  ],
  "orderItems": [
    {
      "productId": "42ae7980-2994-4362-8b44-8492920e8499",
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
      "productId": "42ae7980-2994-4362-8b44-8492920e8499",
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
```

## Types

<!--@include: ../types/app.md-->

<!--@include: ../types/order-status.md-->

<!--@include: ../types/order-type.md-->

<!--@include: ../types/pickup-time-type.md-->

<!--@include: ../types/payment-method.md-->

<!--@include: ../types/payment-entry-payment-method.md-->

<!--@include: ../types/card-type.md-->
