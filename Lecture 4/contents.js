 /***  variables ***/

// var x = "john wick";
// var x = "jason statham";

// let y = "var 2";
// let y = "var 3"; // let does not allow re declaratoin

// const z = "abc";
// z = 123;

// document.write(x);



/***  Data types  ***/
//todo string, number, boolean, object,  undefined
// var x;
// x = "a";
// x = 1.5;
// x = true;
// x = ["1", "name", "true"];
// x = {"name":"abc", "id":1};
// document.write(typeof(x) );



/***  isArray (to check whether the variable is array or not)  ***/
// var arr1 = {"name":"abc", "id":1};
// console.log(Array.isArray(arr1));



/***  comparison operator  ***/
// var a = 55;
// var b = 54;

// console.log(a === b);



/***  if statement   ***/
// if(6 === 6){
// 	console.log("both are equal");
// }
// else{
// 	console.log("both are not equal");	
// }



/***  Switch Statement   ***/
// var x = 3;
// switch(x){
// 	case 1:
// 		console.log('value is 1');
// 		break;
// 	case 2:
// 		console.log('value is 2');
// 		break;
// 	default:
// 		console.log('value is something else');
// }



/***  alert box   ***/
// alert('this is a alert box');	

	

/***  confirm box   ***/
// var ans = confirm('this is a confirm box');	
// console.log(ans);



/***  prompt box   ***/
// var ans = prompt('what do you want to study ??');	
// console.log(ans);



/***  Functions   ***/

// abc();

// function abc(){
// 	alert('hello from function ' );
// }




/***  Events   ***/
	// <!-- onclick, ondblclick, oncontextmenu (right click), onmouseenter, onmouseout  -->

// function fun(){
// 	alert('hello there');
// }




/***  while loop   ***/

// var i = 0;
// while(i < 5){
// 	console.log(`value of i is = ${i}`);
// 	i++;
// }





/***  For loop   ***/
// for (i = 0; i <= 6; i++){
// 	console.log(`i = ${i}`);
// }



/***  Do while loop   ***/
// let i = 1;
// do{
// 	console.log(`i = ${i}`);
// 	i++;
// }
// while(i <= 10);


/***  forEach (does not work with objects)  ***/
// let arr = [10,20,30,40,'john', 50];

// arr.forEach( (item) => {
// 	console.log(item);
// } );



/***  Arrays   ***/
// let arr = [10,20,30,40,'john', 50];
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);	
// }



/***  delete array index value   ***/
// var arr = new Array(10,20,30);
// console.log(arr);
// delete arr[1];
// console.log(arr);
// arr[1] = "abc";
// console.log(arr);


/**************************  Array Methods  *************************/
/***  Sort  ***/
// var arr = new Array(30,20,10);
// console.log(arr);
// arr.sort();
// console.log(arr);



/***  Reverse  ***/
// var arr = new Array(30,20,10);
// console.log(arr);
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);




/***  Pop (delete last variable)  ***/
// var arr = new Array(30,20,10);
// console.log(arr);
// arr.pop();
// console.log(arr);





/***  Push (insert at last index)  ***/
// var arr = new Array(30,20,10);
// console.log(arr);
// arr.push(40);
// console.log(arr);




/***  shift (delete value from 1st index (reverse to pop))  ***/
// var arr = new Array(30,20,10);
// console.log(arr);
// arr.shift();
// console.log(arr);




/***  unshift (insert value at 1st index (reverse to push))  ***/
// var arr = new Array(30,20,10);
// console.log(arr);
// arr.unshift('new');
// console.log(arr);




/***  slice (fetch two or more values form array)  ***/
// var arr1 = new Array(10,20,30,40,50,60);
// console.log(arr1);
// var arr2 = arr1.slice(1);
// var arr2 = arr1.slice(1,3);
// var arr2 = arr1.slice(-3);
// var arr2 = arr1.slice(-4,-1);
// console.log(arr2);





/***  splice (to insert or remove some value in between the array)  ***/
var arr1 = new Array(10,20,30,40,50,60);
// console.log(arr1);
// arr1.splice(2,0,'new1', 'new2');
// arr1.splice(2,2,'new1', 'new2');
// arr1.splice(2,1);
// console.log(arr1);






/***  concat (merge 2 arrays into 1)  ***/
// var arr1 = new Array(10,20,30);
// var arr2 = new Array(40,50,60);
// arr3 = arr1.concat(arr2);
// console.log(arr3);



/***  includes (to check whether some value exists in array or not)  ***/
// var arr1 = new Array(10, 20, "abc", 40, 50, 60, 30);
// var res = arr1.includes("abc");
// console.log(res);





/***  toString (to convert an array into string)  ***/
// var arr1 = new Array(10, 20, "abc", 40, 50, 60, 30);
// var res = arr1.toString();

// console.log(typeof(res));





/*******************  string methods  *********************/
/***  length  ***/

// var str = "what are you guys doing";
// console.log(str.length);



/***  toLowerCase  ***/

// var str = "WHAT are you guys DOING";
// console.log(str.toLowerCase());




/***  toUpperCase  ***/

// var str = "WHAT are you guys DOING";
// console.log(str.toUpperCase());




/***  includes (check whether sub string is present in the string or not (returns true/false))  ***/

// var str = "WHAT are you guys DOING";
// console.log(str.includes('guys'));





/***  startsWith (check whether string is starting from a word or not)  ***/

// var str = "what are you guys doing";
// console.log(str.startsWith('what'));





/***  endsWith (check whether string is ending on a word or not)  ***/

// var str = "what are you guys doing";
// console.log(str.endsWith('doing'));





/***  search (check whether sub string is present in the string or not (returns index))  ***/

// var str = "what are you guys doing";
// console.log(str.search('doing'));





/*** replace   ***/

var str = "what are you guys doing what ?";
 console.log(str.replace('what', 'updated'));
 console.log(str.replace(/what/g, 'updated'));
 console.log(str);






/***  trim   ***/

// var str = "         word       ";
// console.log(str);
// console.log(str.trim());




/***  split (breaks a string)   ***/
 //var str = "what are you guys doing what ?";
 //console.log(str.split(" "));






/******************  Number Methods   *****************/


/***  parseInt   ***/
// var str = "25";
// var num =  parseInt(str) ;
// console.log(num);
// console.log(typeof(num));





/***  parseFloat   ***/
// var str = "25.5";
// var num =  parseFloat(str) ;
// console.log(num);
// console.log(typeof(num));





/******************  Math Methods   *****************/
/***  ceil   ***/
// var num =  10.2;
// console.log(Math.ceil(num));





/***  floor   ***/
// var num =  10.8;
// console.log(Math.floor(num));




/***  round   ***/
// var num =  10.4;
// console.log(Math.round(num));



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
let minAge = 10;
let maxAge = 20;
let randomAge = getRandomNumber(minAge, maxAge);
console.log(randomAge); // Outputs a random number between 18 and 60

