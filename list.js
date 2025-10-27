class Node{
    constructor(data){
        this.data = data; // storing value
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null; // head of list
        this.size = 0; // size of list
    }
    isEmpty(){return this.head === null;}
    getsize(){return this.size;}



    append(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next) curr = curr.next;
            curr.next = node;
        }
        this.size++;
    }
    print(){
        let curr = this.head;
        let str = '';
        while (curr){
            str += curr.data + '->';
            curr = curr.next;
        }
        console.log(str + 'null');
    }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); //10->20->30->null