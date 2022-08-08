View 2pay documentation in detail [2Pay Document](https://2pay.gitbook.io/2pay-api-docs-en/)
## SDK Method Lists

```
{
	securePay,
	refund,
	tranQuery
}
```



## Import

```javascript
import TwoPay from './api/index.js';
const twoPay = new TwoPay({ merchantNo: 'M16529180481867', })
```



## API Lists



### 1. securePay

redirect to 2Pay cashier page if request success

```javascript
    twoPay.securePay({
        vendor: "alipay",
        reference: Date.now().toString(),
        amount: "1",
        currency: "USD",
        description: "description",
        terminal: "ONLINE", 
        callbackUrl: "https://xxxxx/paid.html",
        ipnUrl: "https://xxxxx/notify",
        goodsInfo: "",
        timeout: "120",
    })
```



### 2. Refund

Use refund() API to refund transactions

```javascript
    twoPay.refund({
        amount: '1',                                                       
        reference: 'd4437ef0-4770-4e47-b0e0-82122f9363991',                 
    })
```



### 3. tranQuery

You can search the related order information in the Yuansfer system according to the merchant system payment reference number

```javascript
    twoPay.tranQuery({
        reference: 'd4437ef0-4770-4e47-b0e0-82122f9363991',                 
    })
```





