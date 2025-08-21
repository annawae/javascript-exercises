const sumAll = function(a, b) {
    let sum = 0;
    if(a<b){
        
        for(let i=a; i<=b; i++){
            sum = sum + i;
        }
        
    }
    else if(b<a){
        for(let y=b; y<=a; y++){
            sum = sum + y;
        }

    }
    else sum= a+b;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
