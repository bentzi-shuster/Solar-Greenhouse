
var bar = document.getElementById("next_page");
var loc = window.location.href;
bar.oninput = function () {
  
    var valwuw = bar.value;
    if (valwuw > 90) {
        next_Page()
    } else if (valwuw < 10) {
        last_Page()
    }
}


bar.addEventListener("wheel", function () {
   
    var valwuw = bar.value;
    if (valwuw > 90) {
        next_Page();
    } else if (valwuw < 10) {
        last_Page();
    }

    bar.value = bar.value - -10;
}, { passive: true });


let next_Page = () => {
    window.navigator.vibrate(200); 
    if (loc.includes("/index.html") ) return window.location.href = "./description.html";
    if (loc.includes("/description.html")  ) return window.location.href = "./aboutus.html";
    if (loc.includes("/aboutus.html")  ) return window.location.href = "./background.html";
    if (loc.includes("/background.html") ) return window.location.href = "./design.html";
    if (loc.includes("/design.html")  ) return window.location.href = "./discussion.html";
    if (loc.includes("/discussion.html")  ) return window.location.href = "./credit.html";
    if (loc.includes("/credit.html") ) return window.location.href = "./index.html";
 
}
let last_Page = () => {
    window.navigator.vibrate(200); 
    if (loc.includes("/index.html") ) return window.location.href = "./credit.html";
    if (loc.includes("/description.html")  ) return window.location.href = "./index.html";
    if (loc.includes("/aboutus.html")  ) return window.location.href = "./description.html";
    if (loc.includes("/background.html") ) return window.location.href = "./aboutus.html";
    if (loc.includes("/design.html")  ) return window.location.href = "./background.html";
    if (loc.includes("/discussion.html")  ) return window.location.href = "./design.html"; 
    if (loc.includes("/credit.html") ) return window.location.href = "./discussion.html";
    
    
    
  
   
    
    
    
  
    
    
    
    
    
    //window.history.back()
}