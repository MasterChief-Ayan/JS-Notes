// let name =null;
// let nam = "A20";
// let na = `A30`;
// console.log(typeof(name),typeof(nam),typeof(na));
// let l={a:"b"};
// console.log(name + 'World ' + `!`);
// alert("payment karo!");

// How to take input in node.js itself----------------------------------

// const readline = require('readline');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter kar le apna name!\n",function(name){
//     console.log(`Hi, ${name}`);
//     rl.close();
// })

// practice of if else hyper speed----------------

// let isRaining;

// const readline = require('readline');
// let rl= readline.createInterface({
//     input: process.stdin, output: process.stdout
// });

// rl.question("Enter if its raining or not? ", function (isRaining){
//     console.log(`${isRaining === "yes" ? "Take an umbrella.": "Enjoy the sunshine!"}`);
//     rl.close();
// })

//function test (ARROW FUNCTION)

// let v=(a,b) =>{
//     return a+b
// }
// console.log(v(5,10));

//USE of This BINDING

// let first={
//     bhai: true,
//     show1: function (){
//         let a=()=>{
//             console.log(`He is my ${this.bhai} bhai`);
//         }
//         a();
        
//     }
// };

//first.show1();

//USE of map

// let arr=[0, 20, 30, 100];

// let brr=arr.map(x => (x*1.8)+32);

// console.log(brr);

//More on OBJECTS

let myObj ={
    "name": "Ayan",
    age: 10,
    greet: () => {
        console.log(" Hi, how are you doing?");
    },
    //nested object
    zyada: {
        location: "Bhavanipur",
        year: 2024,
        bye: () => {
            console.log("Bye my friend");
        }
    }
}

//Adding
// myObj.extra= 100;

// //modifying
// myObj.age=11;
// myObj["name"]="Ayan Bhai";

// //Deleting

// delete myObj.greet;

//console.log(myObj);

//myObj.zyada.bye();//accessing the funcion of the nested object

//practice 

// const key = "age";
// const person = { age: 30 };

//console.log(person["age"]);
// map, filet, other function

// let arr=[1,2,3,4,5];
//arr=arr.map(x => x*x);

// arr=arr.filter(val =>{
//     return val%2===0;
// });

// let str="JavaScript is awesome";
// let pos=str.indexOf("awesome");
// // console.log(str.slice(15));
// // console.log(str.slice(pos,pos+7));
// str="HTML,CSS,JavaScript";
// arr=str.split(",");

//error handeling

// try{
//     let ans=10/0;
//     console.log(ans1);
// }
// catch(error){
//     console.log("Its not possible");
// }

// console.log("Final here");

//Throw back

// function divide(a, b) {
//     if (b === 0) {
//       throw Error;
//     }
//     return a / b;
//   }
  
//   try {
//     console.log(divide(10, 0));
//   } catch (error) {
//     console.log("Error");
//   }
//   let s="a";
// try{
//     if(s.length<3){
//         throw new Error("Nahi ho paiga!");
//     }
//     console.log("Ho gaya bhai ho gaya!");
// }
// catch(error){
//     console.log("Error:", error.message);
// }

// const temp=document.getElementsByClassName("1");

// for(let i of temp){
//     i.style.width = "1000px";
//     i.style.border ="1px solid black";
//     i.style.padding ="0px";
// }

// const agla=document.querySelectorAll("ul li");

// for(let i of agla){
//     i.style.color ="green";
// }

// const temp1=document.getElementById("anokha");
// temp1.innerText="Welcome to the Site!";

// function alert(){
//     const temp1=document.getElementById("anokha");
//     temp1.classList.toggle("vaheyat");
// }

// const x1=document.createElement("li");
// x1.textContent="New Item";
// const par=document.getElementById("unordered");
// par.append(x);
// const x=document.createElement("p");
// x.textContent = "Inserted Para";
// const ref=document.getElementById("reference");
// ref.insertAdjacentElement("beforebegin",x);


function remover() {

    const temp=document.getElementById("fourth");
    
    if(temp) temp.remove();

    else{
        const newTemp=document.createElement("li");
        newTemp.id = "fourth";
        newTemp.textContent ="4th";
        const pp=document.getElementById("fifth");
        const p=document.getElementById("unordered");
        pp.insertAdjacentElement("beforebegin",newTemp);
        
    }
}

function searchFunc(){
    const temp=document.getElementById("box");
    temp.style.backgroundColor === "white"? temp.style.backgroundColor = "black" : temp.style.backgroundColor ="white" ;
}

function mouseEntry(temp){
    temp.style.backgroundColor = "rgb(25, 6, 240)";
    temp.style.height ="100px";
    temp.style.width ="100px";
}
function mouseExit(temp){
    temp.style.backgroundColor = "rgb(138, 43, 226)";
    temp.style.height ="100px";
    temp.style.width ="80px";
}

//---------------------
function keystroke(temp){
    console.log(temp.key);
}
function input(temp){
    console.log(temp.value);
}

const x=document.getElementById("name");

x.addEventListener("mouseover",() =>{
    x.style.backgroundColor="red";
});
x.addEventListener("mouseout",() =>{
    x.style.backgroundColor="black";
});

const y=document.getElementById("extra");
document.getElementById("extra").addEventListener("input",()=>{
    console.log(document.getElementById("extra").value);
});

const animalSelect = document.getElementById("animalSelect");

  animalSelect.addEventListener("change", function() {
    console.log("Selected animal:", animalSelect.value);
});