document.getElementById("newMessage");


newMessage.addEventListener("click", ()=>{
    console.log(window.location.href);
    window.location = window.location.href + "new/";
});