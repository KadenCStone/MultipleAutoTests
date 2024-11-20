import { $ } from '@wdio/globals'
import loggingIn from './login.js'
import addStuff from './cart.js'
import Site from './page.js'

class hamburger extends Site {

    get hamBtn () {
        return s$('button[id="inventory_sidebar_link"]');
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
    get logBack () {
        return loggingIn.getIn()
    }
    get add () {
        return addStuff.here()
    }
    get reset () {
        return $('a[id="reset_sidebar_link"]');
    }
    async hamBurg () {

        await this.hamburger.hamBth.click();

        await this.hamburger.invenBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        await this.aboutBtn.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/')

        await browser.url('https://www.saucedemo.com')
        await loggingIn.getIn('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://saucedemo.com/inventory.html')

        await this.hamburger.hamBtn.click()
        await this.hamburger.logOut.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com')
        await loggingIn.getIn('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://saucedemo.com/inventory.html')
    
        await this.addStuff.here.click();
        await this.hamBtn.click();
        await this.reset.click();
    }
}
export default new hamburger