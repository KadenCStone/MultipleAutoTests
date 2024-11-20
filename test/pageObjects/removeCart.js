import { $ } from '@wdio/globals'
import Site from './page.js'

class takeout extends Site () {
    get deLight () {
        return $('#remove-sauce-labs-bike-light');
    }
    get deFleece() {
        return $('[#remove-sauce-labs-fleece-jacket');
    }
    async del () {
        await takeout.deLight.click();
        await takeout.deFeleece.click();
    }
}

export default new takeout