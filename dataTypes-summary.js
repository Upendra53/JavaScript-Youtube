//Primitive

//7 types: String ,Number,Boolean,null,undefined,symbol,BigInt

//javascript is dynamically typed language no need to declare datatypes


//Reference (Non primitive)
//Array , Objects, Functions

const id =Symbol('123')
const anotherId=Symbol('123')

//both are uniqely identified either they contain same value

console.log(id===anotherId);

const bigNumber=3456789986n

const heros=["shaktima","nagraj","doga"];
letmyObj={
    name:"upendra",
    age:21,
}


const myFunction=function(){
console.log("hello ji hello");
}



//to find type of data

console.log(typeof bigNumber);
console.log(typeof id);

//https://www.youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=9