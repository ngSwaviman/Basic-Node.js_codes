function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log("Count is:", count);
    }
    return inner;
}

const counter = outer();
counter();// Count is: 1
counter();// Count is: 2
counter();// Count is: 3