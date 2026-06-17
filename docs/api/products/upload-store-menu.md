---
title: POST uploadStoreMenu
---

Use this API method to upload a group of products to a store.

## Request

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| storeId | string (UUID) | The Store Id of the store that the menu is going to be added |
| storeMenu | Object | Store Menu to be uploaded to store provided |
| &nbsp;&nbsp;name | string | Name of the store menu |
| &nbsp;&nbsp;hours | string | Hours that should the menu be visible. E.g. "Mo-Fr 08:00-09:00", "Sa-Su" or "Mar Mo-Fr 11:00-14:00". see [https://openingh.openstreetmap.de/evaluation_tool/#check](https://openingh.openstreetmap.de/evaluation_tool/#check) |
| &nbsp;&nbsp;channels | Array | Channels that this menu should be visible for |
| &nbsp;&nbsp;&nbsp;&nbsp;[i] | [StoreChannel](#store-channel) | Store channel this menu should be visible for. |
| &nbsp;&nbsp;categories | Array | Array of categories that the menu has |
| &nbsp;&nbsp;&nbsp;&nbsp;[i] | Object | Store Menu Category Item |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the category |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;products | Array | Array of Products that this category contains |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | Object | A Product Item |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalProductId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalProductData | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | Description of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string | Price of this product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifierGroups | Array | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[k] | Object | A modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMin | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMax | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifiers | Array | Array of modifiers in this modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[l] | Object | A modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierId | string | External Identifier of this modifier, it is also used to map to the corresponding modifier provided |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overwritePrice | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | [ModifierSelectionType](#modifier-selection-type) | Whether the customer can select a quantity greater than 1. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifierGroups | Array | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[m] | Object | A sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalSubModifierId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMin | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMax | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifiers | Array | Array of sub-modifiers for this sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[n] | Object | A sub-modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalSubModifierItemId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this sub-modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | number | Price of this sub-modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | [ModifierSelectionType](#modifier-selection-type) | Whether the customer can select a quantity greater than 1. |
| &nbsp;&nbsp;modifiers | Array | Array of modifiers used in the storeMenu |
| &nbsp;&nbsp;&nbsp;&nbsp;[i] | Object | Modifier Object that can be reused in storeMenu using externalModifierId |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalModifierId | string | External identifier of this modifier, this id is also used for identifying the modifier in storeMenu |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of this modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string | Price of the modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl | string | undefined |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| N/A            | N/A  | N/A         |

## Types

<!--@include: ../../types/store-channel.md-->

<!--@include: ../../types/modifier-selection-type.md-->

## Errors

Here is a list of unique errors that be returned for this API endpoint.

| HTTP Status Codes           | Error Name           | Description                                                                                                                                                                    |
| --------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 400 - Bad Request           | InvalidArgumentError | - Required parameter not sent in request - Parameter type is not correct in sent request - Product with productId not found - Neither productId nor externalProductId was sent |
| 429 - Too Many Requests     | ApiCallLimitExceeded | Occurs in case uploadStoreMenu API is called more than twice within 2 minutes                                                                                                  |
| 500 - Internal Server Error | UnknownError         | An unknown server error has occurred, try again.                                                                                                                               |

### Example

Request:

```json
{
  "storeId": "4b825ef7-f4ac-42ec-b1bb-8eb662ef7acb",
  "storeMenu": {
    "name": "PideDirecto Menu",
    "hours": "Mo-Fr 08:00-09:00",
    "channels": ["PideDirecto"],
    "categories": [
      {
        "name": "Burgers",
        "products": [
          {
            "externalProductId": "Burguer01",
            "name": "Cheeseburger",
            "description": "Burguer with cheese",
            "price": "100",
            "imageUrl": "http://routeToImage.com",
            "modifierGroups": [
              {
                "externalModifierGroupId": "SidersGroup01",
                "name": "Siders",
                "requiredMin": 0,
                "requiredMax": 1,
                "modifiers": [
                  {
                    "externalModifierId": "SiderModifier01",
                    "overwritePrice": "10",
                    "type": "SINGLE",
                    "subModifierGroups": [
                      {
                        "externalSubModifierGroupId": "SubModifierGroup01",
                        "name": "Extra Sauce",
                        "requiredMin": 0,
                        "requiredMax": 1,
                        "subModifiers": [
                          {
                            "externalSubModifierId": "Cheese01",
                            "name": "Extra Cheese for Fries",
                            "price": "10",
                            "type": "SINGLE"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "modifiers": [
      {
        "externalModifierId": "SiderModifier01",
        "name": "Fries",
        "description": "Extra fries for burguer",
        "price": "50",
        "imageUrl": "http://routeToImage.com"
      }
    ]
  }
}
```
