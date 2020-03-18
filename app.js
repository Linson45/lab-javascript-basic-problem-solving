// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
function strLength(s) {
    var length = 0;
    while (s[length] !== undefined)
      length++;
    return length;
  }
function checkVowels(s) {
    var vcount = 0;
    index=0;
    while (s[index] !== undefined){
    var alpha=s[index];
    switch(alpha){
        case "a":
        case "A":
        vcount++;    
        console.log(" Vowelcount "+vcount+"\n");        
        console.log(" Vowel "+alpha+" present in position "+index+"\n");
        break;
        case "e":
        case "E":
        vcount++;    
        console.log(" Vowel "+alpha+" present in position "+index+"\n");
        break;
        case "i":
        case "I":
        vcount++;
        console.log(" Vowel "+alpha+" present in position "+index+"\n");
        break;
        case "o":
        case "O":
        vcount++;
        console.log(" Vowel "+alpha+" present in position "+index+"\n");
        break;
        case "u":
        case "U":
        vcount++;
        console.log(" Vowel "+alpha+" present in position "+index+"\n");
        break;     
    }
    index++;  
  }
    if(vcount==0){
        console.log("\nNo vowels present\n");
    }
    
  }

 function checkCase(s){
  var runner = 0;
  var upperc=0;
  var lowerc=0;
  while (s[runner] !== undefined){
    if(s[runner]>= 'A' && s[runner] <= 'Z'){
      upperc++;
     } else if (s[runner] >= 'a' && s[runner] <= 'z'){
       lowerc++;
     }

    runner++;
  }  
 }
 
 function printSep(s){
  [...s].forEach(c => console.log(c))

//   var text = 'uololooo';

//  With ES6
// [...text].forEach(c => console.log(c))

// // With the `of` operator
// for (const c of text) {
//     console.log(c)
// }

//  With ES5
// for (var x = 0, c=''; c = text.charAt(x); x++) { 
//     console.log(c); 
// }

//  ES5 without the for loop:
// text.split('').forEach(function(c) {
//     console.log(c);
// });

 }

// 1.1 Create a variable `ProGrad-1` with the driver's name.
let ProGrad_1='XXXX';
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is "+ProGrad_1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
let ProGrad_2='YYYY';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The driver's name is "+ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let length_1=strLength(ProGrad_1);
let length_2=strLength(ProGrad_2);
if(length_1>length_2){
console.log("The driver "+ProGrad_1+" has the longest string");
}else if(length_2>length_1){
console.log("The driver "+ProGrad_2+" has the longest string");
}else{
console.log("Wow, Both drivers have equally long names");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
checkVowels(ProGrad_1);
checkVowels(ProGrad_2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
checkCase(ProGrad_1);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
printSep(ProGrad_1);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
for (i = (strLength(ProGrad_2) - 1); i >= 0; i--) {
  document.write(ProGrad_2.charAt(i) + " ");
}

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
