function rot13(str) {

    // 1: Alphabet array
    
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
    // 2: String to uppercase
    
    let strTwo = str.toUpperCase()
    
    // 3: String to array
    
    let stringToArray = strTwo.split("")
    
    // 4: Loop
    
    let decryptedIndex = []
    
    let finalArray = []
    
    for (let i=0; i < stringToArray.length; i++) {
    
    //4.1: Index of original letter in string
    
    let alphabetIndex = alphabet.indexOf(stringToArray[i])
    
    //4.2: decrypt letter by looping the array
    
    if (alphabetIndex + 13 > 25) {
    
    decryptedIndex = (alphabetIndex + 13) - 26
    }
    
    //4.3: if character is a whitespace or symbol, it pass them on 
    
    else if (alphabetIndex === -1) {
    
    finalArray.push(stringToArray[i])
     
     continue 
     
     }
    else {
    decryptedIndex = alphabetIndex + 13
    }
    finalArray.push(alphabet[decryptedIndex])
    
    }
    
    // 5: Final Result
    
    let finalResult = finalArray.join("")
    
    
    
    return finalResult
    
    }
    
    
    rot13("SERR PBQR PNZC");