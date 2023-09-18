const { DoublyLinkedList } = require("./Linkedlist");
const {File}  =require("./FileHandler");
const { get } = require("http");
const prompt = require("prompt-sync")();
let dll = new DoublyLinkedList
let file = new File("myfile.txt")


function menu() {
    console.log(
      "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* \n"
     +"||    Choose a letter according to the command :                       ||\n"
     +"||*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*||\n"
     +"||     R :Read file into ds                                            ||\n"
     +"||     W : Write the data stored in your ds in file                    ||\n"
     +"||     I : Insert new line                                             ||\n"
     +"||     D : Delete spesific line                                        ||\n"
     +"||     L : show the length of character in spesific line               ||\n"
     +"||     S : show all lines                                              ||\n"
     +"||     C : Replance spesific line with another one                     ||\n"
     + "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* \n"
     )
    
}

function choice(character){
    let data =[]
    let i =0 , newData , position;
    switch(character){
         
    case 'R':
        // read from file put it in List
 
        while(i < file.numberOfLines() ) {
                dll.push(file.get()[i])
                 i++ 
                  } 
        break;
         
    case 'W':
        // take from list  , put it in file
       
        while( i < dll.sizeOfList()){
            file.addNewLine(dll.get(i))
            //file.addNewLine(dll.get(i)+"\r\n")
            i++
        } 
        console.log(file.get())   
        break;

    case 'S':
            // show all data in the file 
        console.log(file.get())   
         break;
    
    case 'L':
            // number of char 
            let lineNumber = prompt("enter the number of line : ")
            console.log(file.numberOfchar(file.get()[lineNumber]))
         break;
        
    // ------------------------------
    case 'I':
        // insert line in file 
       position = prompt("enter the position that you want change : ");
       newData = prompt("enter the new data  : ");
   
        data = file.get()
        data.splice(position-1 , 0 ,newData)      
        file.addNewData(data.join('\r\n'))

       /*
        
        // 1.make sure that the linkedlist has all in the file 
        let j =0 ;
        while(j < file.numberOfLines() )
            {
                dll.push(file.get()[j])
                j++
       
            }
        // 2. insert the new line to linkedlist         
       dll.insert(position , newData)

       // 3. add it to file
            console.log(dll.pop())
            console.log(dll.pop())
            console.log(dll.pop())
            console.log(dll.pop())
            console.log(dll.pop())
            console.log(dll.pop())
     */
        
        break;
         
    case 'D':
        // delete line 
        console.log("=*(g")
        break;
               
    case 'C':
        position = prompt("enter the position that you want change : ");
        newData = prompt("enter the new data  : ");
    
         data = file.get()
         data.splice(position-1 , -1 ,newData)      
         file.addNewData(data.join('\r\n'))
 
        break;
         
    default :
        console.log("this is unfounded letter");
        return false
   
    }

}
function main() {
    menu()
    let character =prompt("Enter one of these letters (Capital letters) :") 
    choice(character) 

}
// //main()

dll.push("hi")
dll.push("nour")
dll.push("shsk")
//  choice("S")
// dll.printAll()
// file.addNewLine("what is your name ? ")
// file.addNewLine("my name is nourhan ")
// file.addNewLine("nice to meet u ")
// file.addNewLine("nice to meet u too")

// choice('L')
// let m = []
// m =file.get()
// console.log(m)

// dll.push(file.get()[1]) 
// console.log(dll.pop())

//console.log(file.NumberOflines())

choice('W')


