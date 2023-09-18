const { count } = require('console')
const fs = require('fs');
const { threadId } = require('worker_threads');
// var linenumber =0
class File{

    constructor(path){
        this.path =path
        this.linenumber = 0

    }


    get(){
        let data = fs.readFileSync(this.path).toString('UTF8').split('\n');
        return data
    }

    isEmpty(){
        let data = fs.readFileSync(this.path);
        if (data.length== 0) return true
        else return false
    }
    
    addNewLine(newData){
     
        // make sure it is not empty 
        if (this.isEmpty() == true){
            fs.appendFileSync(this.path ,newData)
            //  fs.appendFileSync(this.path , 1+this.linenumber +". "+newData+"\n")
            //this.linenumber++
        }
        else{
            this.numberOfLines()
           // fs.appendFileSync(this.path , this.linenumber  +". "+newData+"\n")
           fs.appendFileSync(this.path , newData)
            this.linenumber++

        }
     
        
    }

    addNewData(newData){
        
        // fs.writeFileSync(this.path , 1+this.linenumber+". "+newData[0]+"\n")
        // this.linenumber++

        fs.writeFileSync(this.path ,newData)
        this.linenumber++

      
    }

    numberOfchar(data){ 
    
      // with spaces and line number 
        const charArray = data.split("") 
        let charNumber =0 , i= 0

        while(charArray[i]!= '\n' && i<charArray.length){
            charNumber++
            i++
        }
        

        // // only the character
        // const charArray = data.split("") 
        // let charNumber =0 , i= 0

        // while(charArray[i]!= '\n' && i<charArray.length){
        //     if (charArray[i]==" ") continue
        //     else charNumber++
            
        //     i++
        // } 

        return charNumber
    }

    numberOfLines(){
        // let lineNum= this.get().length
        // if (lineNum == 0 ) return 0
        // else{
        //     this.linenumber= lineNum
        //     return his.linenumber
        // }
        // //
        this.linenumber= this.get().length
        return this.linenumber 
       
    }

    


}



module.exports = { File}