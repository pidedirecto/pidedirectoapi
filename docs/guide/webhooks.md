---
title: Webhooks
---

# Webhooks {#webhooks}


To receive order/delivery updates you need to configure a webhook or pass one as a parameter when creating an order through the API.
Please note that if you choose to pass webhooks in the API calls, and do not configure a general webhook, you will not get order/delivery updates about of orders created outside this API.

Webhook has to be configured to accept HTTP POST request.
The webhook endpoint should return an HTTP Status 200 response if update was successfully received.
Else it has to return anything but HTTP Status 200.
We will try to re-post order/delivery updates to the webhook url for maximum 3 times every minute.

To configure a general webhook please contact your account manager and send him your webhook for both the TEST and PRODUCTION environments.
