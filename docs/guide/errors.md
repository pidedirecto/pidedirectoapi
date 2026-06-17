---
title: HTTP Status Codes and Errors
---

All API endpoints return the following status codes along with the
`Content-Type: application/json` header.

| HTTP Status Codes           | Description                                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200 - OK                    | Successful request                                                                                                                                |
| 400 - Bad Request           | Required parameter not sent in request - Parameter type is not correct in sent request - Trying to call API when resource state does not allow it |
| 401 - Unauthorized          | Wrong or no API key is provided in header x-api-key - API Key does not have permission to call api for specific resource                          |
| 404 - Not Found             | Invalid API endpoint                                                                                                                              |
| 500 - Internal Server Error | An unknown server error has occurred, try again.                                                                                                  |

All errors returned by API returns at least the following

| Body Parameter | Type   | Description                                       |
| -------------- | ------ | ------------------------------------------------- |
| name           | string | A unique name of the error                        |
| message        | string | A readable description about the error in english |

Here is a list of unique general errors that be returned in all API endpoints.
Check the documentation for a specific endpoint to see other Error Names specific to that endpoint.

| HTTP Status Codes           | Error Name        | Description                                                                                                                |
| --------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 401 - Unauthorized          | UnauthorizedError | - Wrong or no API key is provided in header x-api-key - API Key does not have permission to call api for specific resource |
| 404 - Not Found             | NotFound          | Invalid API endpoint                                                                                                       |
| 500 - Internal Server Error | UnknownError      | An unknown server error has occurred, try again.                                                                           |
