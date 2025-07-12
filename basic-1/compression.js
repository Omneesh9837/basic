// console.log(2>1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)
// console.log(2>=1)




//compare between two same data type

console.log("2">1)//true
console.log("02">1)//true


console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true   eQuality check == and compression < > <= >= work differrently compression 
                             // convert null to 0(kabhi kabhi null nan ke krta)

console.log(undefined==0)//false
 console.log(undefined>0)//false
 console.log(undefined<0)//false


 //strict check === also check datatype and vlue also
 console.log("2"==2)//yha conversion hota h
 console.log("2"===2)//yha conversion nhi hota aur data type alg h dono ki string number