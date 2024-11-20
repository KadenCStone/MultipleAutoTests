import { $ } from '@wdio/globals'
import Site from './page.js'

class takeout extends Site {
    get deLight () {
        return $('#remove-sauce-labs-bike-light');
    }
    get deFleece() {
        return $('#remove-sauce-labs-fleece-jacket');
    }
    async del () {
        await this.deLight.click();
        await this.deFleece.click();
    }
}

export default new takeout()