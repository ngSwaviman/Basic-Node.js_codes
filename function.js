function grater (n1,n2,n3 ){
 if (n1 >= n2 && n1 >= n3) {
  console.log(n1, "is greatest");
} else if (n2 >= n1 && n2 >= n3) {
  console.log(n2, "is greatest");
} else {
  console.log(n3, "is greatest");
}
}
 grater(36,65,60)