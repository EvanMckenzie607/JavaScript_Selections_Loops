console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <=100; i++) {
    if(i % 2 != 0){
        console.log(i);
    }else{
        if(i % 2 == 0){
            continue;
        }
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`);
    }else {
        if (i % 3 == 0){
        console.log(`${i} FIZZ`);
        }
    
        if ( i % 5 == 0){
            console.log(`${i} BUZZ`);
        }
    }
}

//EXERCISE 3
console.log("EXERCISE 3:\n==========\n");

let i = 1

while (i <= 100){
    let output = "";

    if (i % 3 == 0){
        output += "FIZZ";
    }

    if (i % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`)
    i++;    
}

do {
    let output = "";

    if (i % 3 == 0){
        output += "FIZZ";
    }

    if (i % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`)
    i++;    
} while(i <= 100);

//EXERCISE 4
console.log("EXERCISE 4:\n==========\n");


let valueToFind = Math.round((Math.random() * 500));
 // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
 // creates a random number between 100 and 500

 for ( let i = 1; i <= n; i++){
    if ( i == valueToFind){
        console.log(`Found ${valueToFind} wihtin 1-${n}`);
        break;
    }
    if(i == n){
        console.log(`Didn't Find ${valueToFind} within 1-${n}...`);
        
    }
    
}
 