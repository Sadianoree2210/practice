console.log('hello')
var name = "sadia"
var rollNo = 2;
var number = "10"
console.log(name,rollNo,number)
console.log("types of variables" ,typeof(name) , typeof(rollNo), typeof(number));
//parseInt function is used to convert string to number datatype if number is written in double qoutes
//math operations
number = parseInt(number); //ignore floating point number
console.log(typeof(number))
number = Number(number); //ignore floating point number
console.log(typeof(number))

number = number.toString()
console.log(typeof(number))
//problem solving
// convert temperature from 5c celsius to fahrenheit formula
var tempInCal = 13;
var tempInFaren = tempInCal * (9.0/5.0) + 32.0;
console.log(tempInFaren)
//comparison operater
var num1 = 3;
var num2 = 4;
var result = num1 < num2
console.log(result)
console.log("compare" ,num1 > num2)
var num1 = 3;
var num2 = 4;
console.log("not equal" , num1 != num2)
var a = 5;
var b = 5;
console.log("Equal or not" ,a==b)
var d = 6;
var e = 5;
console.log("Equal or greater" ,d >= e)
console.log("Equal or less" ,d <= e)
//=== its also used for equality checking but here data type also matter
var a = 5;
var b = 5;
console.log("Equal or not" ,a===b)
var a = "5";
var b = 5;
console.log("Equal or not" ,a===b)
//........Boolean data types
//and && or|| not 
 var num3 = 9;
 var num4 = 10;

 var flag = num3 >= num4 && num1 >= num2;
  console.log( "and operater" , flag)
  //OR operater
  var num3 = 9;
  var num4 = 10;
 
  var flag = num3 >= num4 || num1 <= num2;
   console.log( "OR operater" , flag)
   //IF CONDITION
   if(true){
    var first = "hello"
    console.log(first)
    console.log(first)
    console.log(first)
    console.log(first)
   }
if(false){
console.log("hy") // not be executed
}
if(2>3)
{ console.log("greater")}
else{
    console.log("not greater")
}
//numbers equal or not
c = 2;
d = 2;
if(c==d)
{ console.log("equal")}
else{
    console.log("not equal")
}
//even or odd
if(c%d==0)
{ console.log("even")}
else{
    console.log("odd")
}
//if else-if conditions
var day = "mon";
if(day ==="mon"){
    console.log("day is monday")
}
else if (day ==="fri"){
    console.log("day is friday")
}
else if (day ==="tue"){
    console.log("day is tuesday")
}
else if(day ==="wed"){
    console.log("day is wednesday")
}
else{
    console.log("day is not defined")
}
//using switch statement
var score = 75;

switch (true) {
  case (score <= 80):
    console.log("Grade is A");
    break;
  case (score <= 70):
    console.log("Grade is B");
    break;
  case (score <= 60):
    console.log("Grade is C");
    break;
  case (score <= 50):
    console.log("PASS");
    break;
  default:
    console.log("Invalid score");
}
//loops in javascript
for(var i = 0; i <= 10 ; i++)
{
    console.log(" for loop values of i is" , i)
}
var j = 1;
while(j <=5 ){
console.log ("its while code of variable j" , j)
j++;
}
var h = 1;
do{
console.log ("its do while code of variable h" , h)
h++;
}while(h <=5 );
///......Array data structure in js
var numbers = [1,2,3,4,5,6,7]
console.log("values of variables of array are" , numbers[4])
for(var index = 0; index <= numbers; index++)
{
  console.log("array values are", numbers[index])
}
//..............array methods
var names = ["sadia","Noreen","sultan", "Ahmad"]
console.log("names are" , names)
names.push("ali")
console.log("names after push are" , names)
// names.pop()
// console.log("names after pop are" , names)
// names.unshift("ahmad")
// console.log("names after unshift are" , names)
// names.shift()
// console.log("names after shift are" , names)
// names.splice(1,4, "dcfg")
// console.log("names aftere splice are" , names)
 var Impnames = names.slice(2,5)
console.log("names of new array are" , Impnames)
//..............Date handling in js
var myDate = new Date()
console.log("current date is", myDate)
 var year = myDate.getFullYear()
console.log("current date is", year)
//..............string methods
var myString = "hello  "
var MySecondString = "sadia"
var bothStrings = myString.concat(MySecondString)
console.log("concat string by function is:", bothStrings)
console.log("concate strings: " , myString + MySecondString)
//string length
console.log("length of myString is:", myString.length)
// trim method to remove  extra spaces 
myString.trim()
console.log( "after trim method myString is:", myString)
console.log(myString.length) // have no change 
console.log( "after trim method myString is:", myString.trim().length)
//  slice method in string
var mySliceString = myString.slice(0,3)
console.log("slice string is:", mySliceString)
//.................Functions in javaScript
//block of code to change the flow of execution according to our need
console.log("hello1")
function myFunction(){
console.log("hello2")
}
console.log("hello3")
myFunction()
myFunction()
myFunction() //we change flow of execution
//............Function with parameters
function myFunctionOfAdd(a , b){
  var sum = a + b
console.log("sum ", sum)

  }
myFunctionOfAdd(2 ,3)
//.............Function with return statement
function sumTwoNumbers(a , b){
  var sum = a + b ;
  return sum
  console.log(first)// not executed anything after return
}
 var returnValue = sumTwoNumbers(3 , 4)
 console.log("return sum" , returnValue)
 
 //....................Objects in JavaScript
var computer = {
  brand: "hp",
  price:"20K",
  color: "Black",
  memory: "8GB"
}
console.log("the computer object", computer)
var student ={
  name: "sadia",
  Department: "BSCS",
  rollNo: "3464",
  CGPA: "3.6"
}
console.log("the student object consists:", student)
// we can access any property which we want
console.log("student name:", student.name)
console.log("computer brand name:", computer.brand)
//we can edit values in object
student.CGPA = "3.8"
console.log("student current cgpa:" , student.CGPA)
//we can also find keys and values of an object
var studentKeys = Object.keys(student)
console.log("keys of student" , studentKeys)
var studentValues = Object.values(student)
console.log("student values:" , studentValues)








