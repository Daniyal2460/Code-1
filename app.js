function add(num){
    return function(num1){
        console.log(num1 + num);
    }
}

let addition = add(5);

addition(5);
