import http from '../http.js';

class TwoPay {
    constructor(params) {
        this.merchantNo = params.merchantNo;
    }
    /**
     * Pay
     * Use the secure-pay() API to place an order. If the interface is successful
     * you can return to the checkout link and jump directly.
     * V1
     * @param params
    */
    securePay(params) {
        return http({
            url: '/online/v1/secure-pay',
            method: 'post',
            data: {
              merchantNo: this.merchantNo,          //required  string	Merchant number
              vendor: params.vendor,                //required  enum	Payment channel: "alipay".
              reference: params.reference,          //required  string	Merchant System order ID，Unique
              amount: params.amount,                //required  decimal	The price amount 
              currency: params.currency,            //required  enum	String  The price currency, possible: "USD"
              description: params.description,      //optional  string	Order description
              terminal: params.terminal,            //required  enum	Client type include: "ONLINE", "WAP", "ANDROID", "IOS".
              callbackUrl: params.callbackUrl,      //required  string	Synchronous callback url address。Synchronous callback address supports
              ipnUrl: params.ipnUrl,                //required  string	Asynchronous notification url address
              goodsInfo: params.goodsInfo,          //required  string	Order goods，JSON format，special characters are not supported，such as: [{"goods_name":"name1","quantity":"quantity1"},{"goods_name":"name2","quantity":"quantity2"}]
              timeout: params.timeout,              //required  integer	he timeout time, 120 by default, in minutes
              // verifySign: params.verifySign      //required  string	Signature  
            }
          }).then(res => {
            typeof params.success === 'function' && params.success(res)
            console.log(res)
            return res
          }).catch(res => {
            typeof params.error === 'function' && params.error(res)
            return Promise.reject(res)
          })
    }

    /**
     * Refund
     * Use the refund() API to refund
     * 
     * V1
     * @param params
    */
    refund(params) {
        return http({
            url: '/app-data-search/v1/refund',
            method: 'post',
            data: {
                merchantNo: this.merchantNo,           // String  The price amount
                amount: params.amount,                 // String  The price currency, possible values: USD
                reference: params.reference,           // String  Merchant System order ID
            }
        }).then(res => {
            typeof params.success === 'function' && params.success(res)
            console.log(res)
            return res
          }).catch(res => {
            typeof params.error === 'function' && params.error(res)
            return Promise.reject(res)
          })
    }

    /**
     * tranQuery
     * You can search the related order information in the 2Pay system 
     * according to the merchant system payment reference number
     * 
     * V1
     * @param params
    */
    tranQuery(params) {
        return http({
            url: '/app-data-search/v1/tran-query',
            method: 'post',
            data: {
                merchantNo: this.merchantNo,            // String  The price amount
                reference: params.reference,            // String  string	Merchant System order ID
            }
        }).then(res => {
            typeof params.success === 'function' && params.success(res)
            console.log(res)
            return res
          }).catch(res => {
            typeof params.error === 'function' && params.error(res)
            return Promise.reject(res)
          })
    }
}

export default TwoPay