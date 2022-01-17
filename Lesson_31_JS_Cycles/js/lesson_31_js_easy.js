// Point 1. Age

let age = +prompt(`Enter here your age, please.`);

if (age > 0 && Number.isInteger(age)) {
    switch (true) {
        case (age <= 11):
            alert(`You are a child. Your age is ${age}.`);
            break;
        case (age <= 17):
            alert(`You are a teenager. Your age is ${age}.`);
            break;
        case (age <= 59):
            alert(`You are an adult. Your age is ${age}.`);
            break;
        case (age <= 100):
            alert(`You are a pensioner. Your age is ${age}.`);
            break;
        case (age <= 1000):
            alert(`You are a liar. Reload the page and try again.`);
            break;
    }
}
else {
    alert(`A wrong age value. Reload the page and try again.`);
    break;
}

// Point 2. Symbols

let num = +prompt(`Enter an integer between 0 and 9.`);

if (num > 0 && num < 10 && Number.isInteger(num)) {
    switch (true) {
        case (num == 1):
            alert(`The symbol for ${num} is !.`);
            break;
        case (num == 2):
            alert(`The symbol for ${num} is @.`);
            break;
        case (num == 3):
            alert(`The symbol for ${num} is #.`);
            break;
        case (num == 4):
            alert(`The symbol for ${num} is $.`);
            break;
        case (num == 5):
            alert(`The symbol for ${num} is %.`);
            break;
        case (num == 6):
            alert(`The symbol for ${num} is ^.`);
            break;
        case (num == 7):
            alert(`The symbol for ${num} is &.`);
            break;
        case (num == 8):
            alert(`The symbol for ${num} is *.`);
            break;
        case (num == 9):
            alert(`The symbol for ${num} is (.`);
            break;
    }
}
else {
    alert(`A wrong age value. Reload the page and try again.`);
}

// Point 3. The sum of numbers

alert(`To find the sum of range, please enter the numbers.`);
let num1 = +prompt(`Enter the first number`);
let num2 = +prompt(`Enter the second number`);
let range = 0;
let x;
let y;

if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 == num2) {
        range = num1 + num2;
        alert(`You have entered the same numbers. Their sum is ${range}.`);
    }
    else {
        if (num2 > num1) {
            x = num1;
            y = num2;
        }
        else {
            x = num2;
            y = num1;
        }
    } 
}
else {
    alert(`A wrong age value. Reload the page and try again.`);
}

while (x <= y) {
    range+= x;
    x++;
}
alert(`The sum of the range is ${range}.`);

// Point 4. A common divisor

alert(`Please, enter 2 integers.`);
let n = +prompt(`Enter the first number.`);
let m = +prompt(`Enter the second number.`);

for (;n != m;) {
    if (n < m) {
        [n, m] = [m, n];
        console.log(n);
        console.log(m);
    }
    else {
        n = n - m;
        console.log(n);
        console.log(m);
    }
}

if (n == m) {
    alert(`The greatest common divider is ${n}.`);
}

// Point 5. All divisors

let num5 = +prompt(`Please, enter an integer.`);

for (let i = 1; i <= num5; i++) {
    if (num5 % i == 0) {
        console.log(i);
    }
}