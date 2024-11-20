import Site from '../pageObjects/page.js'

class Checkout extends Site {

    get shopCart() {
        return $('a[class="shopping_cart_link"]');
    }
    get continueShopping() {
        return $('button[id="continue-shopping"]');
    }
    get checkBtn() {
        return $('button[id="checkout"]');
    } 
    get firstName () {
        return $('input[id="first-name"]');
    }
    get lastName () {
        return $('input[id="last-name"]');
    }
    get postal () {
        return $('input[id="postal-code"]');
    }
    get continueBtn () {
        return $('input[id="continue"]');
    }
    get finishBtn () {
        return $('button[id="finish"]');
    }

    async there (checkoutFunction) {
        await this.shopCart.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');

        await this.continueShopping.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        await this.shopCart.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');

        await this.checkBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');

        await this.firstName.setValue(checkoutFunction);
        await this.lastName.setValue(checkoutFunction);
        await this.postal.setValue(checkoutFunction);
        await this.continueBtn.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');

        await this.finishBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    }
}
export default new Checkout();