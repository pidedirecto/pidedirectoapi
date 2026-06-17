---
title: POST getDeliveryEstimate
---

If you want to create a delivery order you can use this API method to get a delivery estimate with driving duration or delivery cost before creating the order with [createDeliveryOrder](/api/orders/create-delivery-order) API method.
Then pass the `deliveryEstimateId` when calling the [createDeliveryOrder](/api/orders/create-delivery-order) API method to create an order with the guaranteed the delivery cost.
If you don't care about the driving duration or a guaranteed delivery cost you can skip calling this API and call [createDeliveryOrder](/api/orders/create-delivery-order) without passing a `deliveryEstimateId`.

## Request

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| storeId | string (UUID) | The Store Id for the store that is sending the delivery |
| deliveryLocation | Object | GPS coordinates of the delivery location |
| &nbsp;&nbsp;lat | number | Latitude GPS coordinate |
| &nbsp;&nbsp;lng | number | Longitude GPS coordinate |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| deliveryEstimateId | string (UUID) | Unique identifier of the delivery estimate created, pass this to [createDeliveryOrder](/api/orders/create-delivery-order) to get a guaranteed delivery cost |
| storeLocation | Object | GPS coordinates of the store |
| &nbsp;&nbsp;lat | number | Latitude GPS coordinate |
| &nbsp;&nbsp;lng | number | Longitude GPS coordinate |
| deliveryLocation | Object | GPS coordinates of the delivery location |
| &nbsp;&nbsp;lat | number | Latitude GPS coordinate |
| &nbsp;&nbsp;lng | number | Longitude GPS coordinate |
| drivingDistance | number | Driving Distance in meter calculated using Google Maps |
| drivingDuration | number | Driving Duration in seconds calculated using Google Maps |
| deliveryCost | string (number) | Delivery Cost calculated |
| deliveryAvailable | boolean | Boolean that indicates if PideDirecto is able to make the delivery (isWithinDeliveryRadius new field) |
| deliveryNotAvailableReason | [DeliveryNotAvailableReason](#delivery-not-available-reason) | String that indicates why the delivery is not available |

## Types

<!--@include: ../../types/delivery-not-available-reason.md-->

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
  "storeId": "73bee735-f879-454c-b140-534d051c3283",
  "deliveryLocation": {
    "lat": -100.342422,
    "lng": 25.6733765
  }
}
```

Response

```json
{
  "deliveryEstimateId": "ec536649-da5d-4346-a47e-2f868f4a62ab",
  "storeLocation": {
    "lat": -100.375948,
    "lng": 25.671669
  },
  "deliveryLocation": {
    "lat": -100.342422,
    "lng": 25.6733765
  },
  "isWithinDeliveryRadius": true,
  "drivingDistance": 8567,
  "drivingDuration": 1093,
  "deliveryCost": "91",
  "deliveryAvailable": true
}
```
