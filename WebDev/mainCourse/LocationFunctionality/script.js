const btn1=document.getElementById("1");
btn1.addEventListener("click", function () {
    location.hash="targetBox";
});

const btn2=document.getElementById("2");
btn2.addEventListener("click",  function () {
    location.reload();
});

const btn3=document.getElementById("3");
btn3.addEventListener("click",  function () {
    location.href="https://www.google.com/";
});

const btn4=document.getElementById("4");
btn4.addEventListener("click",  function () {
    const showit=document.getElementById("showit");
    showit.textContent = location.href;
});

