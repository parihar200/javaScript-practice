console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined==0);





/*the reason is that an equlity cheack == and comparision >< >= =>  work differently 
Comparision convert null to a number , treation is as 0 
That's why (3) null >=0 is true and (1) null > 0 is false 
*/