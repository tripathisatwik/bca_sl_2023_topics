var item_price = 30000
var discount = 0.035
var redeem_coin = 20
var delivery_distance = 120
var vat = 0.13
function checkVoucher(vcode){
    let amt = 0
    switch(vcode){
        case "1KVC":
            amt = 100
            break
        case "10KVC":
            amt = 500
            break        
        case "20KVC":
            amt = 1500
            break
    }
    return amt;
}
function redeemCoin(coin){
    return (0.5/2)*coin
}
function distance_check(dst){
    if(dst<10){
        return 60
    }else if (dst>=10){
        return 60+(dst-10)*2
    }
}
let vatamount = item_price * vat
let discountamount = item_price * discount
console.log("VAT : " + vatamount)
console.log("Discount: " + discountamount )
console.log("Total redemption amount: " + redeemCoin(redeem_coin))
console.log("Total delivery charge: " + distance_check(delivery_distance))
console.log("Voucher discount: " + checkVoucher("20KVC"))
console.log("Total price: " + item_price)