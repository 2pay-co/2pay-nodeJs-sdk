// Test...
import TwoPay from './api/index.js';
const twoPay = new TwoPay({ merchantNo: 'M165904818627', })


function pay() {
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
}

function refund() {
    twoPay.refund({
        amount: '1',                                                       
        reference: 'd4437ef0-4770-4e47-b0e0-8716236399',                 
    })
}

function tranQuery() {
    twoPay.tranQuery({
        reference: 'd4437ef0-4770-4e47-b0e0-8716236399',                 
    })
}

pay()
// refund()
// tranQuery()
