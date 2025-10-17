function sortArray() {
    let arr = [1, 9, 2, 4, 5];
    arr.sort((a, b) => a - b);

    process.stdout.write("Sorted array: ");
    arr.forEach(num => process.stdout.write(num + " "));
    //process.stdout.write("\n"); // optional: add a newline at the end
}

sortArray();