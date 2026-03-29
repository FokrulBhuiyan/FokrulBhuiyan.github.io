function encodeEmail(email, key) {
    // Hex encode the key
    var encodedKey = key.toString(16);

    // ensure it is two digits long
    var encodedString = make2DigitsLong(encodedKey);

    // loop through every character in the email
    for(var n=0; n < email.length; n++) {

        // Get the code (in decimal) for the nth character
        var charCode = email.charCodeAt(n);

        // XOR the character with the key
        var encoded = charCode ^ key;

        // Hex encode the result, and append to the output string
        var value = encoded.toString(16);
        encodedString += make2DigitsLong(value);
    }
    return encodedString;
}

function make2DigitsLong(value){
    return value.length === 1 
        ? '0' + value
        : value;
}
