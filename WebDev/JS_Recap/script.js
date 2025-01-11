const myurl="https://jsonplaceholder.typicode.com/posts/1";

fetch(myurl).then(response => response.json()).
then(x => console.log("success \n",x)).
catch(x => console.log(`Error occured ${x}`))

console.log("Hi \n");