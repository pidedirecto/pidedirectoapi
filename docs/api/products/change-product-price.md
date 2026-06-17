---
title: POST changeProductPrice
---

Use this API method to change the product price.

## Request

| Body Parameter    | Type            | Description                                                                                                    |
| ----------------- | --------------- | -------------------------------------------------------------------------------------------------------------- |
| productId         | string (UUID)   | - The Product Id you want to change - Not required if you send only a externalProductId                        |
| externalProductId | string          | - The external product id you configured previously in the product - It is ignored if you send a productId too |
| price             | string (number) | The new product price                                                                                          |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| N/A            | N/A  | N/A         |

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name           | Description                                                                                                                                                                    |
| --------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 400 - Bad Request           | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request - Product with productId not found - Neither productId nor externalProductId was sent |
| 500 - Internal Server Error | UnknownError         | An unknown server error has occurred, try again.                                                                                                                               |

### Example

Request:

```json
{
  "productId": "45d13207-0db5-3d01-c26d-be06cd50188a",
  "price": "99.99"
}
```
