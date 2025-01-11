if(localStorage.getItem("theme") === "dark"){
    document.body.style.backgroundColor ="#171717";
    document.body.style.color="white";
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
    }
    else{
        localStorage.setItem("theme","light");
        document.body.style.backgroundColor ="white";
        document.body.style.color="black";
    }
    
})