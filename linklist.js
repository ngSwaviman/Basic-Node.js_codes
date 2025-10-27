class Node{
    constructor(data){
        this.data = data; // storing value
        this.next = null;
    }
}
//creating nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
//linking nodes
node1.next = node2;
node2.next = node3;

console.log(node1.data); //10
console.log(node1.next.data); //20
console.log(node1.next.next.data); //30
console.log(node2.next.data);//30
