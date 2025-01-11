const theDiv=document.getElementById("showbar");

if(localStorage.getItem("theme") === "dark"){
    document.body.style.backgroundColor ="#171717";
    document.body.style.color="white";
    theDiv.style.backgroundColor ="#212121";
}
else{
    localStorage.setItem("theme","light");
}

const btnTheme=document.getElementById("theme");

btnTheme.addEventListener("click", function () {
    if(localStorage.getItem("theme") === "light"){
        localStorage.setItem("theme","dark");
        document.body.style.backgroundColor ="#171717";
        document.body.style.color="white";
        theDiv.style.backgroundColor ="#212121";
    }
    else{
        localStorage.setItem("theme","light");
        document.body.style.backgroundColor ="white";
        document.body.style.color="black";
        theDiv.style.backgroundColor ="grey";
    }
    
})


const xKey=document.getElementById("idkey");
const xVal=document.getElementById("idval");

const btnSaveLocal=document.getElementById("saveLocal");

btnSaveLocal.addEventListener("click", function (){
    localStorage.setItem(xKey.value,xVal.value);
})

const btnSaveSession=document.getElementById("saveSession");

btnSaveSession.addEventListener("click", function (){ 
    sessionStorage.setItem(xKey.value,xVal.value);
})



const btnViewLocal=document.getElementById("viewLocal");

btnViewLocal.addEventListener("click", function () {
    const keys = Object.keys(localStorage);  // Fetch all keys
    if(!keys.length){
        theDiv.innerHTML =`<h3>Local Storage</h3><p>Nothing Found!</p>`;
        return;
    }
    theDiv.innerHTML =`<h3>Local Storage</h3><ul>`;
    keys.forEach(key => {
        const value = localStorage.getItem(key);
        theDiv.innerHTML += `<li>Key: ${key} | Value:${value}</li>`;
    });
    theDiv.innerHTML +=`</ul>`;
    
})

const btnViewSession=document.getElementById("viewSession");

btnViewSession.addEventListener("click", function () {
    const keys = Object.keys(sessionStorage);  // Fetch all keys
    if(!keys.length){
        theDiv.innerHTML =`<h3>Session Storage</h3><p>Nothing Found!</p>`;
        return;
    }
    theDiv.innerHTML =`<h3>Session Storage</h3><ul>`;
    keys.forEach(key => {
        const value = sessionStorage.getItem(key);
        theDiv.innerHTML += `<li>Key: ${key} | Value:${value}</li>`;
    });
    theDiv.innerHTML +=`</ul>`;
    
})

const btnClrLocal = document.getElementById("clrLocal");

btnClrLocal.addEventListener("click", function () {
    localStorage.clear();
})

const btnClrSession = document.getElementById("clrSession");

btnClrSession.addEventListener("click", function () {
    sessionStorage.clear();
})

