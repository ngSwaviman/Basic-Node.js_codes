function operations (num1,num2,operater) {
    if(operater === "+"){
        console.log("Addition:", num1 + num2);
    }else if(operater === "-"){
        console.log("Subtraction:", num1 - num2);
    }else if(operater === "*"){
        console.log("Multiplication:", num1 * num2);
    }else if(operater === "/"){
        console.log("Division:", num1 / num2);
    }else if(operater === "**"){
        console.log("Exponentiation:", num1 ** num2);
    }else if(operater === "%"){
        console.log("Modulus:", num1 % num2);
    }
    else{
        console.log("Invalid operator");
    }
}

operations(50, 10, "+");
operations(500, 100, "-");
operations(50, 10, "*");
operations(50, 10, "**");
operations(50, 10, "/");
operations(50, 10, "%");