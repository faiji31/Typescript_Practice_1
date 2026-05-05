// Array, Object,tuple


let bazarList:string[] =["oil", "sugar","eggs","milk"]

let mixedList:(string|number)[]=["oil",1,"eggs",2]

mixedList.push("salt")


// tuple

let cordinates:[number,number] = [29,49]



let faijiNameAndId:[string,number,boolean] = ["faiji",2220717,true]



// Non Primitive Type === Reference type  



const user:{
    organization:string,
    firstname:string,
    middlename?:string, 
    lastname:string,
    isMarried : boolean
} ={
    firstname: "faiji",
    
    lastname:"liam",
    isMarried: false,
    organization: "iub"
}

user.organization = "aiub"

console.log(user)