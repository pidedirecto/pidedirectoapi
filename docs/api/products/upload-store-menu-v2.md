---
title: POST uploadStoreMenuV2
---

# POST uploadStoreMenuV2 {#post-uploadstoremenuv2}


Use this API method to upload a group of products to a store.

## Request

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| storeId | string (UUID) | The Store Id of the store that the menu is going to be added |
| storeMenu | Object | Store Menu to be uploaded to store provided |
| &nbsp;&nbsp;menu | Object | The menu to upload |
| &nbsp;&nbsp;&nbsp;&nbsp;menuId | string | The id to reference the menu in your domain |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the menu |
| &nbsp;&nbsp;&nbsp;&nbsp;hours | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;channels | Array | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[i] | [StoreChannel](#store-channel) | Store channel this menu should be visible for. |
| &nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | Boolean indicating if the menu is hidden |
| &nbsp;&nbsp;&nbsp;&nbsp;categoryIds | Array | Array that contains the ids of the categories that belongs to the menu |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[i] | string | The categoryId should reference a category included in storeMenu.categories |
| &nbsp;&nbsp;categories | Array | Array that contains the collection of categories to upload |
| &nbsp;&nbsp;&nbsp;&nbsp;[i] | Object | A category |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;categoryId | string | The id to reference the category in your domain |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the category |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | Boolean indicating if the category is hidden |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productIds | Array | Array that contains the ids of the product that belongs to the category |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | string | The productId should reference a products included in storeMenu.products |
| &nbsp;&nbsp;products | Array | Array that contains the collection of product to upload |
| &nbsp;&nbsp;&nbsp;&nbsp;[i] | Object | A product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productId | string | The id to reference the product in your domain |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productData | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size | [ProductSize](#product-size) | Size of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menuItemType | [MenuItemType](#menu-item-type) | Type of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isModifier | boolean | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isProduct | boolean | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hours | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string | Price of this product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;promoPrice | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;promoText | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hidden | string | Boolean indicating if the product is a hidden |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hiddenUntil | Date | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifierGroupIds | Array | Array that contains the ids of the modifier groups that belongs to the product |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | string | The modifierGroupId should reference a modifier group included in storeMenu.modifierGroups |
| &nbsp;&nbsp;modifierGroups | Array | Array that contains the collection of modifier groups to upload |
| &nbsp;&nbsp;&nbsp;&nbsp;[i] | Object | A modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifierGroupId | string | The id to reference the modifier group in your domain |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMin | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMax | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | Boolean indicating if the modifier group is a hidden |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifiers | Array | Array that contains the collection of modifiers in the modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | Object | A modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifierId | string | The id to reference the modifier in your domain |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productData | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | [ModifierSelectionType](#modifier-selection-type) | Type of the modifier |

## Response

Response Status Code 200

| Body Parameter | Type | Description |
| -------------- | ---- | ----------- |
| N/A            | N/A  | N/A         |

## Types

<!--@include: ../../types/store-channel.md-->

<!--@include: ../../types/product-size.md-->

<!--@include: ../../types/menu-item-type.md-->

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
  "storeId": "1d291d1c-1ecd-4c2e-a7f4-fabc1fac93f7",
  "storeMenu": {
    "menu": {
      "menuId": "menuId01",
      "name": "menu1",
      "hidden": false,
      "channels": ["DIDI_FOOD", "PIDEDIRECTO"],
      "categoryIds": ["categoryId01"]
    },
    "categories": [
      {
        "categoryId": "categoryId01",
        "name": "category01",
        "hidden": false,
        "productIds": ["productId01"]
      }
    ],
    "products": [
      {
        "productId": "productId01",
        "size": "LARGE",
        "menuItemType": "MODIFIER",
        "name": "product01",
        "price": "10",
        "hidden": false,
        "modifierGroupIds": []
      },
      {
        "productId": "productId02",
        "size": "LARGE",
        "menuItemType": "ITEM",
        "name": "product02",
        "price": "100",
        "hidden": false,
        "modifierGroupIds": ["modifierGroupId01"]
      }
    ],
    "modifierGroups": [
      {
        "modifierGroupId": "modifierGroupId01",
        "name": "modifierGroup01",
        "requiredMin": 0,
        "requiredMax": 1,
        "hidden": false,
        "modifiers": [
          {
            "modifierId": "productId01",
            "hidden": false,
            "name": "product01",
            "price": "10",
            "type": "SINGLE"
          }
        ]
      }
    ]
  }
}
```
