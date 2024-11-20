import { expect } from '@wdio/globals'
import loggingIn from '../pageObjects/login.js'
import hamburger from '../pageObjects/hamburger.js'
import Checkout from '../pageObjects/checkout.js'
import takeout from '../pageObjects/removeCart.js'
import addStuff from '../pageObjects/cart.js'

describe('Hamburger and Cart Test ', () => {
    it('should go through everything clickable in hamburger menu, then add and remove then finally chekout the cart.', async () => {
        
        await loggingIn.open();
        await loggingIn.getIn('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    
        await hamburger.hamBurg();
        
        await addStuff.here();
        
        await takeout.del();

        await Checkout.shopCart.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await Checkout.continueShopping.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');


        await Checkout.there('Tom', 'Bean', '83204');
    });
});