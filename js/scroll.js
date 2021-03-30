
var bar = document.getElementById("next_page");
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
    console.log(window.location.pathname);
    if (window.location.pathname == "/credit.html") return window.location.href = "./index.html";
    if (window.location.pathname == "/background.html") return window.location.href = "./design.html";
    if (window.location.pathname == "/aboutus.html") return window.location.href = "./background.html";
    if (window.location.pathname == "/design.html") return window.location.href = "./discussion.html";
    if (window.location.pathname == "/description.html") return window.location.href = "./aboutus.html";
    if (window.location.pathname == "/discussion.html") return window.location.href = "./credit.html";
    if (window.location.pathname == "/index.html") return window.location.href = "./description.html";
    if (window.location.pathname == "/Solar-Greenhouse/credit.html") return window.location.href = "./index.html";
    if (window.location.pathname == "/Solar-Greenhouse/background.html") return window.location.href = "./design.html";
    if (window.location.pathname == "/Solar-Greenhouse/aboutus.html") return window.location.href = "./background.html";
    if (window.location.pathname == "/Solar-Greenhouse/design.html") return window.location.href = "./discussion.html";
    if (window.location.pathname == "/Solar-Greenhouse/description.html") return window.location.href = "./aboutus.html";
    if (window.location.pathname == "/Solar-Greenhouse/discussion.html") return window.location.href = "./credit.html";
    if (window.location.pathname == "/Solar-Greenhouse/index.html") return window.location.href = "./description.html";
}
let last_Page = () => {
    window.history.back()
    // if (window.location.pathname == "/credit.html")return  window.location.href = "./discussion.html" ;
    // if (window.location.pathname == "/design.html")return  window.location.href = "./background.html" ;
    // if (window.location.pathname == "/background.html")return  window.location.href = "./aboutus.html" ;
    // if (window.location.pathname == "/aboutus.html")return  window.location.href = "./description.html" ;
    // if (window.location.pathname == "/description.html")return  window.location.href = "./index.html" ;
    // if (window.location.pathname == "/discussion.html")return  window.location.href = "./design.html" ;
    // if (window.location.pathname == "/index.html")return  window.location.href = "./credit.html" ;
}