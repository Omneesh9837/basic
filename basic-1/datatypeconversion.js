let score=33
console.log(typeof score);//number
console.log(typeof(score));//number

let score2="33"
console.log(typeof score2);//string

let score3="33ss"
console.log(typeof score3);

let score3ToNumber=Number(score3);
console.log(score3ToNumber); //Nan
console.log(typeof score3ToNumber);//number but it not number 

//problem h ye 
let score4=null;
console.log(score4);

//"33"=33
//"33abc"=nan
//true 1, false 0
let booleanConvert=1
let oneToBoolean=Boolean(booleanConvert)
console.log(oneToBoolean);

let booleanConvert1=""
let oneToBoolean1=Boolean(booleanConvert1)
console.log(oneToBoolean1);//false

let booleanConvert11="Hitesh"
let oneToBoolean11=Boolean(booleanConvert11)
console.log(oneToBoolean11);//true


//convert number to string
let num=33
let numString=String(num);
console.log(typeof numString); //string

let value=3
let negValue=-value
console.log(negValue)

console.table([(2+1),(2-1),(2*3),(2**3),(2/3),(2%3)])

let str1="Hitesh"
let str2=" Chaudhary"
let str3=str1+str2
console.log(str3)


console.log("3"+1) //31
console.log(1+"3") //13
console.log("1"+2+2) //122
console.log(1+2+"2");//32
console.log(+true);//1
console.log(true)


//prefix or postfix 

let gameCounter=3;
gameCounter++;
console.log(gameCounter)//4
let gameCounter1=3;
++gameCounter1
console.log(gameCounter1)

