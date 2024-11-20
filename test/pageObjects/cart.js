import { $ } from '@wdio/globals'
import Site from './page.js'


class addStuff extends Site {
    get bikeLight () {
        return $('button[id="add-to-cart-sauce-labs-bike-light"]');
    }
    get boltShirt() {
        return $('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }
    get redShirt() {
        return $('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    get jacket() {
        return $('button[id="add-to-cart-sauce-labs-fleece-jacket"]');
    }
    async here() {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await this.bikeLight.click();
        await this.boltShirt.click();
        await this.redShirt.click();
        await this.jacket.click();
    }

}
export default new addStuff();