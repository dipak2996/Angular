import { decoratorWithoutParam, decoratorWithParam, Emoji } from "../decorater/bigbazar.decorator";

@decoratorWithoutParam
@decoratorWithParam(false)
export class Bigbazar {
     _offer: string;

    @Emoji()
    flavor = 'vanilla';

    constructor(offer: string) {
        console.log('invoked bigbazar consturctor')
        this._offer = offer;
    }
    displayOffer() {
        console.log('The current offer is:' + this._offer);
        console.log(this.flavor)
    }
    toppings = [];

   

}