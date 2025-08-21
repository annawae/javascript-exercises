const repeatString = function(word, number) {
    let newString= "";
    if(number === 0){
        return "";
    }
    else if(!number || number < 0){
        return "ERROR";
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
