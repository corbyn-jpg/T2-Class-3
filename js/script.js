let hour = 16;

if (hour < 12){
    console.log("Good Morning");
} else{
    console.log("Good Afternoon");
}

for(let i = 0; i < 3; i++){
    let sent = "My name is Corbyn";
    console.log(sent);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = [];
let odd = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers [i] %2 != 1){
        even.push(numbers[i]);
    }else{
        odd.push(numbers[i]);
    }
}

console.log(even);
console.log(odd);

for(let i = 1; i <= 10; i++){
    console.log(i);
}