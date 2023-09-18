//const file =require("./FileHandler")
const fs = require('fs')
class Node{
    // Each node has three properties, its value, a pointer that indicates the node that follows and a pointer that indicates the previous node
    constructor(val){
        this.val = val;
        this.next = null; //point to the next node 
        this.prev = null;// point to the previos node
    }
}


class DoublyLinkedList {
  
    constructor(){
        this.head = null // the first element in the list 
        this.tail = null // the last element in the list
        this.length = 0
        
    }
    isEmpty(){
        if(!this.head || this.length === 0){
            return true
        }
        else return false
    }
    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        
    }
    sizeOfList(){
        return this.length
    }
    pop(){
        if(this.isEmpty()=== true) return undefined
        const poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode.val
    }   
    shift(){ // remove the head of the list
        if(this.isEmpty() === true) return undefined

        const current = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } 
        else{
            this.head = current.next
            this.head.prev = null
            current.next = null
        }
        this.length--
        return current.val
    }
    unshift(val){ // add element at first
        const newNode = new Node(val)
        if(this.isEmpty()== true) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        
    }
    getNode(index){ // return the value in this index
        if(index < 0 || index >= this.length) return null
        let count, current

        if(index <= this.length/2){
            count = 0
            current = this.head
            while(count !== index){
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current = current.prev
                count--
            }
        }
        return current
    }
    get(index){ // return the value in this index
        if(index < 0 || index >= this.length) return null

        if (index == 1 ){return this.head.val        }
     
        // if(index <= this.length/2){
        //     count = 0
        //     current = this.head
        //     while(count !== index){
        //         current = current.next
        //         count++
        //     }
        // } else {
        //     count = this.length - 1
        //     current = this.tail
        //     while(count !== index){
        //         current = current.prev
        //         count--
        //     }
        // }
        // return current.val
    }
    
    
    set(index, val){ // modify the value of this index
        var foundNode = this.getNode(index)
        if(foundNode != null){
            foundNode.val = val
            return true
        }
        return false
    }
    
    insert(index, val){ 
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)


        var newNode = new Node(val)
        var beforeNode = this.getNode(index-1)
    
        var afterNode = beforeNode.next

        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return true
    }

    printAll(){
        if(this.isEmpty()=== true) return console.log("this linkedlist is empty")
        else{
            let current = this.head ;
            while( current.next != null) {
                console.log(current.val)
                current = current.next 
            }
            console.log(current.val)
        }
    }
 

  
    


}



module.exports = { DoublyLinkedList}