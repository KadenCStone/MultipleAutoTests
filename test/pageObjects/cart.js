import { $ } from '@wdio/globals'
import Site from './page.js'


class addStuff extends Site {
    get light () {
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
    async here () {
        await this.addStuff.light.click();
        await this.addStuff.boltShirt.click();
        await this.addStuff.redShirt.click();
        await this.addStuff.jacket.click();
        await this.takeout.del.click();
    }

}
export default new addStuff