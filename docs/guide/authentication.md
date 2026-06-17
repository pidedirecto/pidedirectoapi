---
title: Authentication
---

# Authentication {#authentication}


## API Key

You need a Private API Key that you use for accessing our API for all stores.
API Key has to be sent in Header: 'x-api-key'

There is one API Key for the TEST environment and another for PRODUCTION environment.
The API Keys are private and should only be used from server.
If your credentials gets compromised you we can create you a new one and invalidate the old one at any time.

To get an API key, talk to your Account Manager.

### Example

```json
headers: {
  "x-api-key": "private_test_YAdrs93oY6HBX7Tws34QsLdo"
}
```

## Store Id

Each unique location that needs the delivery service needs to configured in PideDirecto before it can be integrated.
All unique locations has a unique Store Id, a UUID 4 string.
This Store Id has to be provided when creating orders through the API.

Please contact your Account Manager to add new locations or if you need to know what storeId you have configured.
