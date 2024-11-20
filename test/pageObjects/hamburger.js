import { $ } from '@wdio/globals'
import loggingIn from './login.js'
import Site from './page.js'
import addStuff from './cart.js'

class hamburger extends Site  {

    get hamBtn () {
        return $('button[id="react-burger-menu-btn"]');
    }
    
    get invenBtn () {
        return $('a[id="inventory_sidebar_link"]');
    }

    get aboutBtn () {
        return $('a[id="about_sidebar_link"]');
    }
    get logOut () {
        return $('a[id="logout_sidebar_link"]');
    }
    get reset () {
        return $('a[id="reset_sidebar_link"]');
    }
    async hamBurg () {

        await this.hamBtn.click();

        await this.invenBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        await this.aboutBtn.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');

        await browser.url('https://www.saucedemo.com/');
        await loggingIn.getIn('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        await addStuff.here()

        await this.hamBtn.click();
        await this.reset.click();
        await this.logOut.click();
    
        await browser.url('https://www.saucedemo.com/');
        await loggingIn.getIn('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    }
}
export default new hamburger();