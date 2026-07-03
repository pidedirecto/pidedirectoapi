---
title: POST getStoreMenu
---

# POST getStoreMenu {#post-getstoremenu}


Use this API method to retrieve the store menu

## Request

| Body Parameter | Type          | Description                                                  |
| -------------- | ------------- | ------------------------------------------------------------ |
| storeId        | string (UUID) | The Store Id of the store that the menu is going to be added |

## Response

Response Status Code 200

| Property | Type | Description |
| -------- | ---- | ----------- |
| **menus** | Array | List of menus |
| &nbsp;&nbsp;[i] | Object | A menu |
| &nbsp;&nbsp;&nbsp;&nbsp;menuId | string (UUID) | ID of the menu |
| &nbsp;&nbsp;&nbsp;&nbsp;externalMenuId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the menu |
| &nbsp;&nbsp;&nbsp;&nbsp;hours | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;menuCategoryIds | Array | undefined |
| **menuCategories** | Array | List of menu categories |
| &nbsp;&nbsp;[i] | Object | A menu category |
| &nbsp;&nbsp;&nbsp;&nbsp;menuCategoryId | string (UUID) | ID of the menu category |
| &nbsp;&nbsp;&nbsp;&nbsp;externalMenuCategoryId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the menu category |
| &nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;menuItemIds | Array | undefined |
| **menuItems** | Array | List of menu items |
| &nbsp;&nbsp;[i] | Object | A menu item |
| &nbsp;&nbsp;&nbsp;&nbsp;menuItemId | string (UUID) | ID of the menu item |
| &nbsp;&nbsp;&nbsp;&nbsp;externalMenuItemId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;menuItemType | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the menu item |
| &nbsp;&nbsp;&nbsp;&nbsp;nameTranslations | object | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;description | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;descriptionTranslations | object | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;hours | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;price | string | Price of the item |
| &nbsp;&nbsp;&nbsp;&nbsp;modifierPrice | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;promoPrice | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;promoText | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;isProduct | boolean | Boolean that indicates if item is a product |
| &nbsp;&nbsp;&nbsp;&nbsp;isModifier | boolean | Boolean that indicates if item is a modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;imageUrl | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;modifierGroupIds | Array | undefined |
| **modifierGroups** | Array | undefined |
| &nbsp;&nbsp;[i] | Object | A modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;modifierGroupId | string (UUID) | ID of the modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;externalModifierGroupId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;nameTranslations | object | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;requiredMin | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;requiredMax | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;hidden | boolean | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;modifiers | Array | List of modifiers in this group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[j] | Object | A modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menuItemId | string (UUID) | ID of the modifier item |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;externalMenuItemId | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string | Price of the modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sku | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modifierType | string | Type of modifier: "SINGLE" or "MULTIPLE" |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifierGroups | Array | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[k] | Object | A sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the sub-modifier group |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMin | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredMax | number | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subModifiers | Array | List of sub-modifiers |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[l] | Object | A sub-modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name | string | Name of the sub-modifier |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price | string | undefined |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type | string | Type of sub-modifier: "SINGLE" or "MULTIPLE" |

### Example

Request:

```json
{
  "storeId": "8ab03a24-e63f-4296-a8a3-4a8cf6709e15"
}
```

Response:

```json
{
  "menus": [
    {
      "menuId": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
      "externalMenuId": "ext_breakfast_menu",
      "name": "Breakfast Menu",
      "hours": "06:00-11:00",
      "hidden": false,
      "menuCategoryIds": [
        "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
        "d2e3f4a5-b6c7-4d8e-9f0a-1b2c3d4e5f6a"
      ]
    },
    {
      "menuId": "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
      "externalMenuId": "ext_lunch_menu",
      "name": "Lunch & Dinner Menu",
      "hours": "11:00-22:00",
      "hidden": false,
      "menuCategoryIds": [
        "e3f4a5b6-c7d8-4e9f-0a1b-2c3d4e5f6a7b",
        "f4a5b6c7-d8e9-4f0a-1b2c-3d4e5f6a7b8c",
        "a5b6c7d8-e9f0-4a1b-2c3d-4e5f6a7b8c9d"
      ]
    }
  ],
  "menuCategories": [
    {
      "menuCategoryId": "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
      "externalMenuCategoryId": "ext_cat_breakfast",
      "name": "Breakfast Specials",
      "hidden": false,
      "menuItemIds": [
        "11223344-5566-4778-899a-abbccddeeff0",
        "22334455-6677-4889-9aab-bbccddeeeff1"
      ]
    },
    {
      "menuCategoryId": "d2e3f4a5-b6c7-4d8e-9f0a-1b2c3d4e5f6a",
      "externalMenuCategoryId": "ext_cat_beverages",
      "name": "Beverages",
      "hidden": false,
      "menuItemIds": ["33445566-7788-4899-aabb-ccddeeeeff22"]
    },
    {
      "menuCategoryId": "e3f4a5b6-c7d8-4e9f-0a1b-2c3d4e5f6a7b",
      "externalMenuCategoryId": "ext_cat_burgers",
      "name": "Burgers",
      "hidden": false,
      "menuItemIds": [
        "44556677-8899-4aab-bbcc-ddeeeeff3344",
        "55667788-99aa-4bbc-cdde-eeeff4455566"
      ]
    },
    {
      "menuCategoryId": "f4a5b6c7-d8e9-4f0a-1b2c-3d4e5f6a7b8c",
      "externalMenuCategoryId": "ext_cat_pizza",
      "name": "Pizzas",
      "hidden": false,
      "menuItemIds": ["66778899-aabb-4ccd-deef-ff55667788aa"]
    },
    {
      "menuCategoryId": "a5b6c7d8-e9f0-4a1b-2c3d-4e5f6a7b8c9d",
      "externalMenuCategoryId": "ext_cat_desserts",
      "name": "Desserts",
      "hidden": true,
      "menuItemIds": ["778899aa-bbcc-4dde-eff6-6778899aabbc"]
    }
  ],
  "menuItems": [
    {
      "menuItemId": "11223344-5566-4778-899a-abbccddeeff0",
      "externalMenuItemId": "ext_pancakes_001",
      "menuItemType": "ITEM",
      "name": "Classic Pancakes",
      "nameTranslations": {
        "en": "Classic Pancakes",
        "es": "Panqueques Clásicos",
        "fr": "Crêpes Classiques"
      },
      "description": "Fluffy pancakes served with maple syrup and butter",
      "descriptionTranslations": {
        "en": "Fluffy pancakes served with maple syrup and butter",
        "es": "Panqueques esponjosos servidos con jarabe de arce y mantequilla",
        "fr": "Crêpes moelleuses servies avec sirop d'érable et beurre"
      },
      "hours": "06:00-11:00",
      "hidden": false,
      "price": "8.99",
      "promoPrice": "6.99",
      "promoText": "Breakfast Special - Save $2!",
      "isProduct": true,
      "isModifier": false,
      "imageUrl": "https://example.com/images/pancakes.jpg",
      "modifierGroupIds": [
        "aa11bb22-cc33-4dd4-ee55-ff6677889900",
        "bb22cc33-dd44-4ee5-ff66-778899aabb11"
      ]
    },
    {
      "menuItemId": "22334455-6677-4889-9aab-bbccddeeeff1",
      "externalMenuItemId": "ext_eggs_benedict_001",
      "menuItemType": "ITEM",
      "name": "Eggs Benedict",
      "description": "Poached eggs on English muffin with hollandaise sauce",
      "hidden": false,
      "price": "12.50",
      "isProduct": true,
      "isModifier": false,
      "imageUrl": "https://example.com/images/eggs-benedict.jpg",
      "modifierGroupIds": ["cc33dd44-ee55-4ff6-6778-899aabbcc222"]
    },
    {
      "menuItemId": "33445566-7788-4899-aabb-ccddeeeeff22",
      "externalMenuItemId": "ext_coffee_001",
      "menuItemType": "ITEM",
      "name": "Coffee",
      "description": "Fresh brewed coffee",
      "hidden": false,
      "price": "2.50",
      "isProduct": true,
      "isModifier": false,
      "modifierGroupIds": ["dd44ee55-ff66-4778-899a-abbccdd33344"]
    },
    {
      "menuItemId": "44556677-8899-4aab-bbcc-ddeeeeff3344",
      "externalMenuItemId": "ext_classic_burger_001",
      "menuItemType": "ITEM",
      "name": "Classic Burger",
      "nameTranslations": {
        "en": "Classic Burger",
        "es": "Hamburguesa Clásica"
      },
      "description": "Beef patty with lettuce, tomato, and special sauce",
      "descriptionTranslations": {
        "en": "Beef patty with lettuce, tomato, and special sauce",
        "es": "Carne de res con lechuga, tomate y salsa especial"
      },
      "hidden": false,
      "price": "11.99",
      "isProduct": true,
      "isModifier": false,
      "imageUrl": "https://example.com/images/classic-burger.jpg",
      "modifierGroupIds": [
        "ee55ff66-7788-4899-aabb-ccddee445566",
        "ff667788-99aa-4bbc-cdde-eeff55667788",
        "aa778899-aabb-4ccd-deef-f66778899aab"
      ]
    },
    {
      "menuItemId": "55667788-99aa-4bbc-cdde-eeeff4455566",
      "externalMenuItemId": "ext_veggie_burger_001",
      "menuItemType": "ITEM",
      "name": "Veggie Burger",
      "description": "Plant-based patty with fresh vegetables",
      "hidden": false,
      "price": "10.99",
      "isProduct": true,
      "isModifier": false,
      "imageUrl": "https://example.com/images/veggie-burger.jpg",
      "modifierGroupIds": [
        "ee55ff66-7788-4899-aabb-ccddee445566",
        "ff667788-99aa-4bbc-cdde-eeff55667788"
      ]
    },
    {
      "menuItemId": "66778899-aabb-4ccd-deef-ff55667788aa",
      "externalMenuItemId": "ext_margherita_pizza_001",
      "menuItemType": "ITEM",
      "name": "Margherita Pizza",
      "description": "Fresh mozzarella, tomato sauce, and basil",
      "hidden": false,
      "price": "14.99",
      "isProduct": true,
      "isModifier": false,
      "imageUrl": "https://example.com/images/margherita-pizza.jpg",
      "modifierGroupIds": ["bb8899aa-bbcc-4dde-eff6-678899aabbcc"]
    },
    {
      "menuItemId": "778899aa-bbcc-4dde-eff6-6778899aabbc",
      "externalMenuItemId": "ext_chocolate_cake_001",
      "menuItemType": "ITEM",
      "name": "Chocolate Cake",
      "description": "Rich chocolate cake with chocolate frosting",
      "hidden": false,
      "price": "6.99",
      "isProduct": true,
      "isModifier": false,
      "imageUrl": "https://example.com/images/chocolate-cake.jpg"
    },
    {
      "menuItemId": "8899aabb-ccdd-4eef-f667-7889aabbccdd",
      "externalMenuItemId": "ext_mod_bacon",
      "menuItemType": "MODIFIER",
      "name": "Bacon",
      "hidden": false,
      "price": "2.00",
      "modifierPrice": "2.00",
      "isProduct": false,
      "isModifier": true
    },
    {
      "menuItemId": "99aabbcc-ddee-4ff6-6778-89aabbccddee",
      "externalMenuItemId": "ext_mod_cheese",
      "menuItemType": "MODIFIER",
      "name": "Extra Cheese",
      "hidden": false,
      "price": "1.50",
      "modifierPrice": "1.50",
      "isProduct": false,
      "isModifier": true
    }
  ],
  "modifierGroups": [
    {
      "modifierGroupId": "aa11bb22-cc33-4dd4-ee55-ff6677889900",
      "externalModifierGroupId": "ext_toppings_group",
      "name": "Toppings",
      "nameTranslations": {
        "en": "Toppings",
        "es": "Ingredientes",
        "fr": "Garnitures"
      },
      "requiredMin": 0,
      "requiredMax": 3,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "aabbccdd-eeff-4001-1223-344556677889",
          "externalMenuItemId": "ext_mod_blueberries",
          "name": "Blueberries",
          "price": "1.50",
          "color": "#4169E1",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "bbccddee-ff00-4112-2334-45566778899a",
          "externalMenuItemId": "ext_mod_strawberries",
          "name": "Strawberries",
          "price": "1.50",
          "color": "#FF6347",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "ccddeeff-0011-4223-3445-5667788899ab",
          "externalMenuItemId": "ext_mod_bananas",
          "name": "Bananas",
          "price": "1.00",
          "color": "#FFD700",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "ddeeff00-1122-4334-4556-677889aabbcc",
          "externalMenuItemId": "ext_mod_chocolate_chips",
          "name": "Chocolate Chips",
          "price": "1.25",
          "color": "#8B4513",
          "modifierType": "MULTIPLE"
        }
      ]
    },
    {
      "modifierGroupId": "bb22cc33-dd44-4ee5-ff66-778899aabb11",
      "externalModifierGroupId": "ext_syrup_group",
      "name": "Syrup Choice",
      "requiredMin": 1,
      "requiredMax": 1,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "eeff0011-2233-4445-5667-7889aabbccdd",
          "externalMenuItemId": "ext_mod_maple_syrup",
          "name": "Maple Syrup",
          "price": "0.00",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "ff001122-3344-4556-6778-89aabbccddee",
          "externalMenuItemId": "ext_mod_honey",
          "name": "Honey",
          "price": "0.50",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "00112233-4455-4667-7889-9aabbccddeeff",
          "externalMenuItemId": "ext_mod_agave",
          "name": "Agave Nectar",
          "price": "0.75",
          "modifierType": "SINGLE"
        }
      ]
    },
    {
      "modifierGroupId": "cc33dd44-ee55-4ff6-6778-899aabbcc222",
      "externalModifierGroupId": "ext_side_choice_group",
      "name": "Side Choice",
      "requiredMin": 1,
      "requiredMax": 1,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "11223344-5566-4778-899a-abbccddeff00",
          "externalMenuItemId": "ext_mod_home_fries",
          "name": "Home Fries",
          "price": "0.00",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "22334455-6677-4889-9aab-bccddeff0011",
          "externalMenuItemId": "ext_mod_fruit_salad",
          "name": "Fruit Salad",
          "price": "2.00",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "33445566-7788-4899-aabb-cddeff001122",
          "externalMenuItemId": "ext_mod_toast",
          "name": "Toast",
          "price": "0.00",
          "modifierType": "SINGLE"
        }
      ]
    },
    {
      "modifierGroupId": "dd44ee55-ff66-4778-899a-abbccdd33344",
      "externalModifierGroupId": "ext_coffee_size_group",
      "name": "Size",
      "requiredMin": 1,
      "requiredMax": 1,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "44556677-8899-4aab-bbcc-deff00112233",
          "externalMenuItemId": "ext_mod_small",
          "name": "Small",
          "price": "0.00",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "55667788-99aa-4bbc-cdde-ff001122334",
          "externalMenuItemId": "ext_mod_medium",
          "name": "Medium",
          "price": "0.50",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "66778899-aabb-4ccd-deef-f00112233445",
          "externalMenuItemId": "ext_mod_large",
          "name": "Large",
          "price": "1.00",
          "modifierType": "SINGLE"
        }
      ]
    },
    {
      "modifierGroupId": "ee55ff66-7788-4899-aabb-ccddee445566",
      "externalModifierGroupId": "ext_burger_cheese_group",
      "name": "Cheese Type",
      "requiredMin": 0,
      "requiredMax": 1,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "778899aa-bbcc-4dde-eff0-0112233445566",
          "externalMenuItemId": "ext_mod_cheddar",
          "name": "Cheddar Cheese",
          "price": "1.00",
          "color": "#FFA500",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "8899aabb-ccdd-4eef-f001-122334455667",
          "externalMenuItemId": "ext_mod_swiss",
          "name": "Swiss Cheese",
          "price": "1.25",
          "color": "#FFFACD",
          "modifierType": "SINGLE"
        },
        {
          "menuItemId": "99aabbcc-ddee-4ff0-0112-233445566778",
          "externalMenuItemId": "ext_mod_pepper_jack",
          "name": "Pepper Jack",
          "price": "1.50",
          "color": "#FF8C00",
          "modifierType": "SINGLE"
        }
      ]
    },
    {
      "modifierGroupId": "ff667788-99aa-4bbc-cdde-eeff55667788",
      "externalModifierGroupId": "ext_burger_extras_group",
      "name": "Extra Toppings",
      "requiredMin": 0,
      "requiredMax": 5,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "aabbccdd-eeff-4001-1223-34556677889",
          "externalMenuItemId": "ext_mod_bacon_strips",
          "name": "Bacon",
          "price": "2.00",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "bbccddee-ff00-4112-2334-4556677889a",
          "externalMenuItemId": "ext_mod_avocado",
          "name": "Avocado",
          "price": "2.50",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "ccddeeff-0011-4223-3445-566778899ab",
          "externalMenuItemId": "ext_mod_fried_egg",
          "name": "Fried Egg",
          "price": "1.50",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "ddeeff00-1122-4334-4556-67789aabbcc",
          "externalMenuItemId": "ext_mod_grilled_onions",
          "name": "Grilled Onions",
          "price": "0.75",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "eeff0011-2233-4445-5667-78aabbccdd",
          "externalMenuItemId": "ext_mod_jalapeños",
          "name": "Jalapeños",
          "price": "0.50",
          "modifierType": "MULTIPLE"
        }
      ]
    },
    {
      "modifierGroupId": "aa778899-aabb-4ccd-deef-f66778899aab",
      "externalModifierGroupId": "ext_burger_doneness_group",
      "name": "Burger Temperature",
      "nameTranslations": {
        "en": "Burger Temperature",
        "es": "Punto de Cocción"
      },
      "requiredMin": 1,
      "requiredMax": 1,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "ff001122-3344-4556-6778-8aabbccddee",
          "externalMenuItemId": "ext_mod_rare",
          "name": "Rare",
          "price": "0.00",
          "modifierType": "SINGLE",
          "subModifierGroups": [
            {
              "name": "Add Sauce",
              "requiredMin": 0,
              "requiredMax": 2,
              "subModifiers": [
                {
                  "name": "BBQ Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Hot Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Garlic Aioli",
                  "price": "0.75",
                  "type": "MULTIPLE"
                }
              ]
            }
          ]
        },
        {
          "menuItemId": "00112233-4455-4667-7889-aabbccddeeff",
          "externalMenuItemId": "ext_mod_medium_rare",
          "name": "Medium Rare",
          "price": "0.00",
          "modifierType": "SINGLE",
          "subModifierGroups": [
            {
              "name": "Add Sauce",
              "requiredMin": 0,
              "requiredMax": 2,
              "subModifiers": [
                {
                  "name": "BBQ Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Hot Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Garlic Aioli",
                  "price": "0.75",
                  "type": "MULTIPLE"
                }
              ]
            }
          ]
        },
        {
          "menuItemId": "11223344-5566-4778-899a-bbccddeeeff",
          "externalMenuItemId": "ext_mod_medium",
          "name": "Medium",
          "price": "0.00",
          "modifierType": "SINGLE",
          "subModifierGroups": [
            {
              "name": "Add Sauce",
              "requiredMin": 0,
              "requiredMax": 2,
              "subModifiers": [
                {
                  "name": "BBQ Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Hot Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Garlic Aioli",
                  "price": "0.75",
                  "type": "MULTIPLE"
                }
              ]
            }
          ]
        },
        {
          "menuItemId": "22334455-6677-4889-9aab-ccddeeff0011",
          "externalMenuItemId": "ext_mod_well_done",
          "name": "Well Done",
          "price": "0.00",
          "modifierType": "SINGLE",
          "subModifierGroups": [
            {
              "name": "Add Sauce",
              "requiredMin": 0,
              "requiredMax": 2,
              "subModifiers": [
                {
                  "name": "BBQ Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Hot Sauce",
                  "price": "0.50",
                  "type": "MULTIPLE"
                },
                {
                  "name": "Garlic Aioli",
                  "price": "0.75",
                  "type": "MULTIPLE"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "modifierGroupId": "bb8899aa-bbcc-4dde-eff6-678899aabbcc",
      "externalModifierGroupId": "ext_pizza_toppings_group",
      "name": "Additional Toppings",
      "requiredMin": 0,
      "requiredMax": 10,
      "hidden": false,
      "modifiers": [
        {
          "menuItemId": "33445566-7788-4899-aabb-ddeeff001122",
          "externalMenuItemId": "ext_mod_pepperoni",
          "name": "Pepperoni",
          "price": "2.00",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "44556677-8899-4aab-bbcc-eeff00112233",
          "externalMenuItemId": "ext_mod_mushrooms",
          "name": "Mushrooms",
          "price": "1.50",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "55667788-99aa-4bbc-cdde-ff001122344",
          "externalMenuItemId": "ext_mod_olives",
          "name": "Black Olives",
          "price": "1.50",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "66778899-aabb-4ccd-deef-0011223344556",
          "externalMenuItemId": "ext_mod_bell_peppers",
          "name": "Bell Peppers",
          "price": "1.50",
          "modifierType": "MULTIPLE"
        },
        {
          "menuItemId": "778899aa-bbcc-4dde-eff0-112233445566",
          "externalMenuItemId": "ext_mod_extra_cheese_pizza",
          "name": "Extra Cheese",
          "price": "2.50",
          "modifierType": "MULTIPLE"
        }
      ]
    }
  ]
}
```
