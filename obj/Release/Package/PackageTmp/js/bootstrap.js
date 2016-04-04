$(document).ready(function(){
      
    //This is the number comparison function
    $('#button1').click(function(){
        
        //Take input string from HTML form and store it in toAdd
        var toAdd = $("input[name=numbersToCompare]").val();
    
        //Split characters in string between spaces
        var x = toAdd.split(" ");
        
        //Declare array y to house contents of array x as integers
        var y = [];

        //Convert each element of array x to integer using parseInt()
        for (var i = 0; i < x.length; i++) {
            y.push(parseInt(x[i]));
            };

        //Print lowest number number
        document.getElementById("leastNum").innerHTML = Math.min.apply(null, y);
    
        //Print greatest number
        document.getElementById("greatestNum").innerHTML = Math.max.apply(null, y);
    
        //Find sum and print.  Here, z is the sum, and each element of y is added to it
        var z = 0;
    
        for (var i = 0; i < y.length ; i++ ) {
            z += y[i];
            }
    
        document.getElementById("sum").innerHTML = z;

        //Find average and print
        z = z / y.length;
        document.getElementById("avg").innerHTML = z;

        //Find product and print.  Same for-loop as the sum, but with multiplication
        z = y[0];
        
        for (var i = 1; i < y.length; i++ ) {
            z *= y[i];
            }

        document.getElementById("product").innerHTML = z;

    });
    
    //This is the factorial function
    $('#button2').click(function(){
       
        //Declare the input variable and the factorial result variable
        var toFact = $("input[name=factorial]").val();
        var fact = toFact;
        
        //Multiply fact times one less than fact, and keep multiplying by one less until the amount to multiply by is zero. I imagine this only works for positive numbers
        for( var i = (toFact - 1) ; i > 0; i-- ) {
            fact = fact * i;
        }
        
        //Print the factorial
        document.getElementById("factorialDiv").innerHTML = fact;
        
    });
    
    //This is the FizzBuzz function
    $('#button3').click(function() {
        
        //Take user input and store it in fbString
        var fbString = $("input[name=fizzBuzzField]").val();
        
        //Split the string into an array
        var fbStringArray = fbString.split( " " );
        
        //Declare a variable to house the elements of fbStringArray as integers
        var fbIntegerArray = [];
        
        //Declare a string variable that will become the final output
        var outputString = "";
        
        //Convert each element of fbStringArray to integers and push them to fbIntegerArray
        for (var i = 0; i < fbStringArray.length; i++) {
            fbIntegerArray.push( parseInt( fbStringArray[i] ) );
            };
        
        //Run FizzBuzz from 1 to 100
        for ( var i = 1; i <= 100; i++ ) {
            
            //The test logic is testing whether the quotient of the entered numbers and i is equal to the absolute value of
            //that quotient.  If they are equal, that means that the quotient is an integer and therefore i is a multiple of
            //the number it is being compared to.
            
            //First test for being a multiple of both numbers and set outputString to FizzBuzz if it passes
            if( ( i / fbIntegerArray[0] == Math.floor(i / fbIntegerArray[0]) ) && ( i / fbIntegerArray[1] == Math.floor( i / fbIntegerArray[1]) ) ) {
                outputString += "FizzBuzz";
            //If that test fails, test for being a multiple of only the first number and append Fizz to outputString if it passes
            } else if( i / fbIntegerArray[0] == Math.floor(i / fbIntegerArray[0]) ) { 
                outputString += "Fizz";
            //Then test for being a multiple of only the second number and append Buzz to outputString if it passes
            } else if( i / fbIntegerArray[1] == Math.floor(i / fbIntegerArray[1]) ) { 
                outputString += "Buzz"; 
            //If those three tests fail, append the number being tested to outputString
            } else {
                outputString += i.toString();
            }
            
            //Add a space to the end of outputString to separate each entry by a space
            outputString += " ";
            
        }
        
        //Print outputString
        document.getElementById("fizzBuzzDiv").innerHTML = outputString;
        
    });
    

    //This is the palindrome test function
    $('#button4').click(function(){
       
        //Take input from the HTML form
        var palInput = $("input[name=palindromeInput]").val();
        //Remove spaces from the string
        palInput = palInput.replace(/\s+/g, '');

        //True or false variable.  Default is true.  If palindrome tests fail, it will be changed to false
        var isPalindrome = true;
        
        //Declare a variable to go backwards from the end of the string.  The last character address is length - 1 since it's an array and the addresses start at 0
        var j = palInput.length - 1;
        
        //Compare the first and last characters, then second and second to last, and so forth.  Any test resulting in false will change isPalindrome to false
        for ( var i = 0; i  < j/2 ; i++ ) {
            if ( palInput[i] != palInput[j-i] ) {
                isPalindrome = false;
            }
        }
        
        
        //Print whether or not the string is a palindrome
        if ( isPalindrome ) {
            document.getElementById("palindromeDiv").innerHTML = "The string is a palindrome.";
        } else {
            document.getElementById("palindromeDiv").innerHTML = "The string is not a palindrome.";
        }
    });
    
    //Mouse-over code




});