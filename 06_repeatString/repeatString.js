const repeatString = function(word, number) {
    let newString= "";
    if(number == 0){
        return "Error";
    }
    else{
    for(let i=0; i<number; i++){
        newString = newString+word;
    }
    return newString;
    }
};



// Do not edit below this line
module.exports = repeatString;
