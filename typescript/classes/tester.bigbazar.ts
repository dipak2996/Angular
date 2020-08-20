import { Bigbazar } from './bigbazar'

let bigbazar: Bigbazar = new Bigbazar('50% off');

bigbazar.flavor='dipak patil'

bigbazar.displayOffer();

let isclose: boolean = bigbazar['isclose']


console.log(isclose)