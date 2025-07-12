//data type are two type premitive and non premitive (call by vallue or call by reference age koi aur language pdhi h to)

//primitive (call by value mtlb jb app copy kerte khi se copy me change hote h)

//String Number Boolean Null undefined Symbol BigInt

//reference (non primitive)

//array objects function
                 //define
const score =100//number
const scoreValue=100.3//decimel
const isLogged=false//boolean
const outSight=null//

let userEmail //vaalue undefined
let userEmail1=undefined

//Symbol define

const id =Symbol('123');
const idDiff=Symbol('123')
console.log(id===idDiff);

const bigNumber=3455555555555555n //bigInt defien


//array

const arr=["aman","hitesh","hitesh"]
//object
let myobject={
    name:"aman",
    age:21
}

//function

function myApp(){

}
const myApp1=function(){

}
const myApp2=()=>{

}

//typeof use for ki dataaType kya 
console.log(typeof myObject)


//memorty are two type stack(primitive) variable declare ka copy milta h
// , heap(non primitive) jo bhi change karo to original value me change hoga(original value ka reference milta h c
// copy nhi miltah)

let myYoutube="hitesh"  /*                                                */
let anotherName=myYoutube
console.log(anotherName)
anotherName="chaudhary"
console.log(myYoutube)
console.log(anotherName)
//isme aapko value nhi di jati stack me iska copy diya jatah 
let user1={
    name:"hitesh",
    eMail:"hiteshgamil.com"
}
let user2=user1

user2.eMail="chaudharymail.com"
console.log(user1.eMail);// user2 ka gmail aayega 
console.log(user2.eMail)//user 2 ka gamil aayega