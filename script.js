let container = document.getElementById("container")
let gamestart1 = document.getElementById("f-1-remove")
let gamestart2 = document.getElementById("f-2-remove")
let gamestart3 = document.getElementById("f-3-remove")
let gamestart4 = document.getElementById("f-4-remove")
let gamestart5 = document.getElementById("gif")
let tecent = document.getElementById("tec-img")
let login = document.getElementById("login")
let guest = document.getElementById("guest")
let guest_text = document.getElementById("guest_text")
let lodi1 = document.getElementById("lodi1")
let lodi2 = document.getElementById("lodi2")
let ban = document.getElementById("ban")
let tecentmobile = document.getElementById("tec-img2")
let loadmobile2 = document.getElementById("loadmobile2")
let guest2 = document.getElementById("guest2")
let lodi3 = document.getElementById("lodi3")
let lodi4 = document.getElementById("lodi4")
let ban2 = document.getElementById("ban2")
let tecentwidth = screen.width


function pubg_start() {
    gamestart1.style.display="none";
    gamestart2.style.display="none";
    gamestart3.style.display="none";
    gamestart4.style.display="none";
    gamestart5.style.display="block";
    // 1set intarval 
    setTimeout(displaygif,3000)
    function displaygif() {
    gamestart5.style.display="none";
    if (tecentwidth<=950) {
        tecentmobile.style.display="block"
        tecent.style.display="none"

    }else{
        
        tecent.style.display="block"   
    }
    }
    // second set interval 
    setTimeout(kafton,8000)
    function kafton() {
    tecent.style.display="none" 
    tecentmobile.style.display="none"

    if (tecentwidth<=950) {
        loadmobile2.style.display="block"

    }else{
        
        load.style.display="block"  
    }

    }
    // third setinterval 
    setTimeout(f_loading,12300)
    function f_loading() {
    load.style.display="none"
    loadmobile2.style.display="none"
    if (tecentwidth<=950) {
        guest_text.style.display="none"
        login.style.display="block"
        guest2.style.display="block"


    }else{
        login.style.display="block"
        guest.style.display="block"  
    }
    
    }
}

function start() {
   login.style.display="none"
   guest.style.display="none"
   guest_text.style.display="none"
   
   if (tecentwidth<=950) {
    lodi3.style.display="block"

}else{
    
    lodi1.style.display="block"   
}

   setTimeout(loding2,3000)
   function loding2() {
   lodi1.style.display="none"
   lodi3.style.display="none"
   if (tecentwidth<=950) {
    lodi4.style.display="block"

}else{
    
    lodi2.style.display="block"  
}
   }
   setTimeout(loding3,6000)
   function loding3() {
   lodi2.style.display="none"
   lodi4.style.display="none"
   if (tecentwidth<=950) {
    ban2.style.display="block"


}else{
        ban.style.display="block"
}

   }
}
