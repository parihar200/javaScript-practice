// primitive datatype
// type : String ,number , boolean , null, undefined ,symbol,BigInt

const score = 100;
const scoreValue= 100.2;
const isloggedIn =false;
const outSidetemp =null;
let userEmail;


const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id===anotherId);


const BigInt =5614522225445368786453n

// refrence (Non-premitive)
// Array , Object ,Function

const summery= ["test","key","objet"];//array
let data=
{
    name:"shruti",
    age:23,

}//object

// console.log(typeof data );
const myFunction =function(){
    console.log("data")
}
console.log(typeof myFunction );