//navbar

btnNav = document.getElementById("navBar-repositivo");
btnNavRepor = document.getElementById("comand-repositivos")

btnNav.addEventListener("click", ()=>{
    if(btnNavRepor.style ==="none"){
        btnNavRepor.style = "flex"

    }
    else{
        btnNavRepor.style = "none"
    }
})