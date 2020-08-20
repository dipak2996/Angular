export function calucateTheAge(birthYear:number):string{
    return 'Your age is:'+(2020-birthYear);
}

export function calucateTheTotal(quentity=5,price:number):string{
    return 'The total price based on quentity is'+ (price*quentity)
}

export function sumAllNumberFromTheArray(num:number[]):string{
    let sum:number=0;
    num.forEach(element => {
        sum=sum+element;
    });
    return 'The sum of the given array is:'+sum;
}

export function getTheColourBasedOnday(day?:string):string{
    switch(day){
    case 'Mon':
        return 'white';
    case 'Tue':
        return 'blue';
    case 'Wed':
        return 'yello';
    case 'Thur':
        return 'green';
    default :
        return 'black';
        break;                     
    }
}