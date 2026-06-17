---
title: POST getDriverPosition
---

Use this API method to retrieve the driver position of the requested orderId.
Make sure that the orderId exists, and it is not finished.

## Request

| Body Parameter | Type          | Description                                   |
| -------------- | ------------- | --------------------------------------------- |
| orderId        | string (UUID) | Unique identifier of the order in PideDirecto |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| driverId | string (UUID) | Unique identifier of the driver in PideDirecto |
| driverPosition | Object | Object containing driver position |
| &nbsp;&nbsp;lat | number | Latitude GPS coordinate |
| &nbsp;&nbsp;lng | number | Longitude GPS coordinate |

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
  "orderId": "38981f83-853c-4193-a3c2-97f05582e0ad"
}
```

Response

```json
{
  "driverId": "37d13197-0fa5-4d0b-85ad-ae06dd40177a",
  "driverPosition": {
    "lat": 120.87123,
    "lng": 125.81233
  }
}
```
