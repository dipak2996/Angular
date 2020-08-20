export class Bag {
    companyName: string;
    price: number;
    displayInfo(): void {
        console.log('Bag Compnay name is:' + this.companyName)
        console.log('Bag price name is:' + this.price)

    }
    constructor(comanyName: string, price: number) {
        this.companyName = comanyName;
        this.price = price;
    }
   
}
