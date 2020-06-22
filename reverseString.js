// Basic Algorithm Scripting: Reverse a String

/*Description
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Tests

reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG"
*/

//Solution 1

function reverseString(str) {                                           //1
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {       //2
      //console.log(i);                                                 //2.1
      //console.log(reversedStr);                                       //2.2
      reversedStr += str[i];                                            //3
    }
    return reversedStr;                                                 //4
  }

console.log(reverseString("hello"))                                     //5 
//Output = "olleh"


 //Notes To help me understand the code by line
  //Solution 1

  /*
//Example of string.length method
----------------------------------

  let strFour = "four";
  console.log(strTwo.length);
//Output 4

  let strFourMinusOne = "four";
  console.log(strTwoMinusOne.length - 1);
//Output 3

-----------------------------------
*/

  /*1 - function reverseString(str) {
      - The function declaration (function statement) defines a function with the specified parameters.
      - You can also define functions using the Function constructor and a function expression.
      - source - [https://devdocs.io/javascript/statements/function]
      
      - "reverseString" - the name of the function
      - "str" - The argument for the function - The value to be reversed
  */

   /*2  for loop, It has three optional expressions. They are [initialization]; [condition]; [final-expression]. Source = [https://devdocs.io/javascript/statements/for]

        In this example it is used as follows:
        [initialization];     = var reversedStr = "", i = str.length - 1;
        [condition];          = i >= 0;
        [final-expression]    = i--

        The initialization expression tells the loop to start with an empty string and minus one off the length of the string. The reason a minus one is used is because javascript indexes are zero based. So if the minus was not there we would tell the loop to look for index 5 (Which is non existent in the case of the string "hello". Example for string length method above).

        The condition expression tells the loop to run untill the [0] zero index. Check diagram below. 

        The final expression will keep deducting one index until the above condition expression is met
         
   
        -2.1  | reversedStr = ""|        i         | This i represents the i in line //2
              +-----------------+------------------+
              | o               |        4         | i-- = 3
              | ol              |        3         | i-- = 2
              | oll             |        2         | i-- = 1
              | olle            |        1         | i-- = 0
              | olleh           |        0         | i  >= 0  (Condition met, loop now complete)

        -2.2 - Above

    3. reversedStr += str[i]; - This can be visualized as follows:

      - string by index = h[0], e[1], l[2], l[3], o[4]
      - the += str[i] will grab each ONE of these indices per iteration.
      - The reversedStr is just an empty string "". Sort of a container to hold all letters and each iteration a new index will be added to the current one like in the diagram in 2.1
      - console.log(reverseString("hello")) - "prints" the function and output to the screen


  */

  //Questions
  /*
  Why is var used in this case and not let?
    -var is function scoped - so it would be available throughout the whole function defined above. 
    - let is block scoped so if var were to be replace with let only the for loop block will have access to the variable.
  */

    
