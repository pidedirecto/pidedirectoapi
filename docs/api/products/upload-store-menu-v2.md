---
title: POST uploadStoreMenuV2
---

Use this API method to upload a group of products to a store.

## Request

| Body Parameter                                       | Type                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storeId                                              | string (UUID)                                                                                             | The Store Id of the store that the menu is going to be added                                                                                                                                                                                                                                                                                                         |
| storeMenu                                            | Object                                                                                                    | Store Menu to be uploaded to store provided                                                                                                                                                                                                                                                                                                                          |
| storeMenu.menu                                       | Object                                                                                                    | The menu to upload                                                                                                                                                                                                                                                                                                                                                   |
| storeMenu.menu.menuId                                | string                                                                                                    | The id to reference the menu in your domain                                                                                                                                                                                                                                                                                                                          |
| storeMenu.menu.name                                  | string                                                                                                    | Name of the menu                                                                                                                                                                                                                                                                                                                                                     |
| storeMenu.menu.hours                                 | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.menu.channels                              | Array                                                                                                     | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.menu.channels[i]                           | [StoreChannel](#store-channel) | Store channel this menu should be visible for. |
| storeMenu.menu.hidden                                | boolean                                                                                                   | Boolean indicating if the menu is hidden                                                                                                                                                                                                                                                                                                                             |
| storeMenu.menu.categoryIds                           | Array                                                                                                     | Array that contains the ids of the categories that belongs to the menu                                                                                                                                                                                                                                                                                               |
| storeMenu.menu.categoryIds[i]                        | string                                                                                                    | The categoryId should reference a category included in storeMenu.categories                                                                                                                                                                                                                                                                                          |
| storeMenu.categories                                 | Array                                                                                                     | Array that contains the collection of categories to upload                                                                                                                                                                                                                                                                                                           |
| storeMenu.categories[i].categoryId                   | string                                                                                                    | The id to reference the category in your domain                                                                                                                                                                                                                                                                                                                      |
| storeMenu.categories[i].name                         | string                                                                                                    | Name of the category                                                                                                                                                                                                                                                                                                                                                 |
| storeMenu.categories[i].hidden                       | boolean                                                                                                   | Boolean indicating if the category is hidden                                                                                                                                                                                                                                                                                                                         |
| storeMenu.categories[i].imageUrl                     | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.categories[i].productIds                   | Array                                                                                                     | Array that contains the ids of the product that belongs to the category                                                                                                                                                                                                                                                                                              |
| storeMenu.categories[i].productIds[i]                | string                                                                                                    | The productId should reference a products included in storeMenu.products                                                                                                                                                                                                                                                                                             |
| storeMenu.products                                   | Array                                                                                                     | Array that contains the collection of product to upload                                                                                                                                                                                                                                                                                                              |
| storeMenu.products[i].productId                      | string                                                                                                    | The id to reference the product in your domain                                                                                                                                                                                                                                                                                                                       |
| storeMenu.products[i].productData                    | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].size                           | [ProductSize](#product-size)                             | Size of the product                                                                                                                                                                                                                                                                                                                                                  |
| storeMenu.products[i].menuItemType                   | [MenuItemType](#menu-item-type)                                                                              | Type of the product                                                                                                                                                                                                                                                                                                                                                  |
| storeMenu.products[i].isModifier                     | boolean                                                                                                   | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].isProduct                      | boolean                                                                                                   | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].name                           | string                                                                                                    | Name of the product                                                                                                                                                                                                                                                                                                                                                  |
| storeMenu.products[i].description                    | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].hours                          | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].price                          | string                                                                                                    | Price of this product                                                                                                                                                                                                                                                                                                                                                |
| storeMenu.products[i].promoPrice                     | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].promoText                      | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].imageUrl                       | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].hidden                         | string                                                                                                    | Boolean indicating if the product is a hidden                                                                                                                                                                                                                                                                                                                        |
| storeMenu.products[i].hiddenUntil                    | Date                                                                                                      | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.products[i].modifierGroupIds               | Array                                                                                                     | Array that contains the ids of the modifier groups that belongs to the product                                                                                                                                                                                                                                                                                       |
| storeMenu.products[i].modifierGroupIds[i]            | string                                                                                                    | The modifierGroupId should reference a modifier group included in storeMenu.modifierGroups                                                                                                                                                                                                                                                                           |
| storeMenu.modifierGroups                             | Array                                                                                                     | Array that contains the collection of modifier groups to upload                                                                                                                                                                                                                                                                                                      |
| storeMenu.modifierGroups[i].modifierGroupId          | string                                                                                                    | The id to reference the modifier group in your domain                                                                                                                                                                                                                                                                                                                |
| storeMenu.modifierGroups[i].name                     | string                                                                                                    | Name of the modifier group                                                                                                                                                                                                                                                                                                                                           |
| storeMenu.modifierGroups[i].requiredMin              | number                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.modifierGroups[i].requiredMax              | number                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.modifierGroups[i].hidden                   | boolean                                                                                                   | Boolean indicating if the modifier group is a hidden                                                                                                                                                                                                                                                                                                                 |
| storeMenu.modifierGroups[i].modifiers                | Array                                                                                                     | Array that contains the collection of modifiers in the modifier group                                                                                                                                                                                                                                                                                                |
| storeMenu.modifierGroups[i].modifiers[i].modifierId  | string                                                                                                    | The id to reference the modifier in your domain                                                                                                                                                                                                                                                                                                                      |
| storeMenu.modifierGroups[i].modifiers[i].productData | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.modifierGroups[i].modifiers[i].name        | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.modifierGroups[i].modifiers[i].hidden      | boolean                                                                                                   | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.modifierGroups[i].modifiers[i].price       | string                                                                                                    | undefined                                                                                                                                                                                                                                                                                                                                                            |
| storeMenu.modifierGroups[i].modifiers[i].type        | [ModifierSelectionType](#modifier-selection-type)                                                                            | Type of the modifier                                                                                                                                                                                                                                                                                                                                                 |

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
