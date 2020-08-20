console.log("started learnning angular")

export let age:number=67;

let username:any="dipak patil"

 let hobby:string[]=['dance','singing','tour','readding']

const hm:any='example of constant';

if(hobby[0]==='dance')
{
    console.log(hobby[0])    
    console.log(typeof username)   
 
}


hobby.forEach(element => {console.log(element)
    
});
console.log("added the new element")

hobby.push("outing")

hobby.forEach(ele=>{console.log(ele)});

console.log("popping the element")

hobby.pop();

hobby.forEach(ele=>{console.log(ele)});

console.log("removing the pertuicular element")

hobby.splice(0,0)


hobby.forEach(ele=>{console.log(ele)});