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
// console.log(typeof myFunction ); 


// **************************************************************************************************************//
// Stack (primitive) , Heap (non-premitive)
let my_data="shruti@gmail.com"
let myAnother_data =  my_data
myAnother_data="spSINGH"
console.log(myanother_data)
console.log(my_data)



let userOne = {
    name :"shruti",
    email : "she@mail.com" 
}
let userTwo = userOne;
userTwo.email="shruti@gmail.com"
console.log(userOne.email);