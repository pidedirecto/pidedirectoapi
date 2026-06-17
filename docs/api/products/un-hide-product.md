---
title: POST unHideProduct
---

Use this API method to change the product visibility.

## Request

| Body Parameter    | Type          | Description                                                        |
| ----------------- | ------------- | ------------------------------------------------------------------ |
| storeId           | string (UUID) | - The store id of the product                                      |
| externalProductId | string (UUID) | - The external product id you configured previously in the product |

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
  "storeId": "4b825ef7-f4ac-42ec-b1bb-8eb662ef7acb",
  "externalProductId": "45d13207-0db5-3d01-c26d-be06cd50188a"
}
```
