function isPalindrome(string){
    let reverseString = string.split("").reverse().join("");
    // console.log(reverseString);

    let stringNoSpaces = string.replace(/\s/g, "");
    // console.log(stringNoSpaces);

    let reverseStringNoSpaces = reverseString.replace(/\s/g, "");
    // console.log(reverseStringNoSpaces);

    if(stringNoSpaces === reverseStringNoSpaces){
        return true;
    } 
}

console.log(isPalindrome("a man a plan a canal panama"));

